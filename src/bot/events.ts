import qrcode from 'qrcode-terminal';
import { Client } from 'whatsapp-web.js';

export const onReady = (): void => {
    console.log('Client is ready!');
};

export const onQr = (qr: string): void => {
    qrcode.generate(qr, { small: true });
};
export const onMessage = (client: Client, message: any): void => {
    console.log(message.body);
    if (message.body === '!ping') {
        client.sendMessage(message.from, 'pong');
    }
};