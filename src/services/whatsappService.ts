import { Client } from 'whatsapp-web.js';
import config from '../config';

const client = new Client(config.client);

export const sendMessage = async (number: string, message: string): Promise<void> => {
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