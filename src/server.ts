import express from 'express';
import cors from 'cors'
import { onReady, onQr, onMessage } from './bot/events';
import client from "./config/index"
import { router } from './routes';

const port = process.env.PORT || 3333
const server = express()



// CLIENT START

client.on('message_create', message => onMessage(client, message));
client.on('ready', (_: any)=> onReady(client));
client.on('qr', onQr);

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