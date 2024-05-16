import { Request, Response } from 'express';
import { sendMessage } from '../../services/whatsappService';

export const postSendMessage = async (req: Request, res: Response): Promise<void> => {
    const { number, message } = req.body;
    console.log(number,message)
    if (!number || !message) {
        res.status(400).send('Número e mensagem são obrigatórios.');
        return;
    }
    try {
        await sendMessage(number, message);
        res.status(202).send(`Mensagem enviada para ${number}`);
    } catch (err) {
        res.status(500).send(err.message);
    }
};