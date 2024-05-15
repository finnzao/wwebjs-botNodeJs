import express from 'express';
import cors from 'cors'
import { Client } from 'whatsapp-web.js';
import { onReady, onQr, onMessage } from './bot/events';
import config from "./config/index"
import { router } from './routes';

const port = process.env.PORT || 3333
const server = express()

const client = new Client(config.client);


// CLIENT
client.on('message', message => onMessage(client, message));
client.on('ready', onReady);
client.on('qr', onQr);

client.initialize();
// SERVER
server.use(cors({
    origin: process.env.ENABLED_CORS?.split(';') || []
}))
server.use(express.json())

server.use(router)
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


export { server };