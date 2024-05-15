
import Whatsapp, { ClientOptions } from 'whatsapp-web.js'
const { Client, LocalAuth } = Whatsapp

interface Config {
    client: ClientOptions;
}

const config: Config = {
    client: {
        authStrategy: new LocalAuth({ dataPath: './src/' }),
        webVersionCache: {
            type: "remote",
            remotePath: "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2412.54.html",
        },
    },
};

let config_default = config;

export { config_default as default };