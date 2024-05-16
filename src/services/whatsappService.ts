import client from '../config/index';




export const sendMessage = async (number: string, message: string) => {

    try {
        const response = await client.sendMessage(`${number}@c.us`, message);
        if (response.id) {
            console.log(`Mensagem enviada com sucesso para ${number}`);
            return true;
        }
    } catch (err) {
        console.error(`Falha ao enviar mensagem para ${number}`, err);
        throw err;
    }
};