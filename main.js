const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const express = require('express');

const app = express();
const port = 3000; // Você pode escolher outra porta se desejar

app.use(express.json()); // Middleware para parsear JSON no corpo das requisições

const client = new Client({
    authStrategy: new LocalAuth(),
    webVersionCache: {
        type: "remote",
        remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
    },
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('message_create', message => {
    console.log(message.body);
    if (message.body === '!ping') {
        client.sendMessage(message.from, 'pong');
    }
});

client.initialize();

// Função para enviar mensagens
const sendMessage = async (number, message) => {
    client.sendMessage(`${number}@c.us`, message)
        .then(response => {
            if (response.id) {
                console.log(`Mensagem enviada com sucesso para ${number}`);
            }
        })
        .catch(err => {
            console.error(`Falha ao enviar mensagem para ${number}`, err);
        });
};

// Endpoint para enviar mensagens
app.post('/send', (req, res) => {
    const { number, message } = req.body;
    if (!number || !message) {
        return res.status(400).send('Número e mensagem são obrigatórios.');
    }
    sendMessage(number, message)
        .then(() => res.send(`Mensagem enviada para ${number}`))
        .catch(err => res.status(500).send(err.message));
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});