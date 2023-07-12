import { Configuration, OpenAIApi } from "openai";
let handler = async (m, { conn, text }) => {
if (!text) throw "*_🪻 • Ingrese su petición._*"
m.reply(wait)
const configuration = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        });
            m.reply(response.data.choices[0].text)
    }
handler.help = ['itsuki <petición>']
handler.tags = ['tools']
handler.command = /^(ia|chatgpt|itsuki)$/i
export default handler

/*import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `*_🪻 • Ingrese su petición._*\n*🪼 Ejemplo de uso:* ${usedPrefix + command} como hacer un gatito con papel` 
m.reply(wait)
let yuta = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await yuta.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['itsuki <petición>']
 handler.tags = ['tools']
 handler.command = ['openai', 'chatgpt', 'ia', 'itsuki', 'ai'] 
 export default handler*/