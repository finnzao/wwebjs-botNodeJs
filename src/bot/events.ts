import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

export const onReady = async (client: Client) => {
    console.log('Client is ready!');
    try {
        const version = await client.getWWebVersion();
        console.log(`A versão atual do WhatsApp Web é: ${version}`);
    } catch (error) {
        console.error('Erro ao obter a versão do WhatsApp Web:', error);
    }
};

export const onQr = (qr: string): void => {
    qrcode.generate(qr, { small: true });
};
export const onMessage = (client: Client, message: any): void => {
    if (message.body === '!ping') {
        client.sendMessage(message.from, 'pong');
    }
};