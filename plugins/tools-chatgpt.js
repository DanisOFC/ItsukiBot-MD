import fetch from 'node-fetch'
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
 export default handler