import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) return conn.reply(m.chat, `Ingrese el link de un video de YouTube junto al comando`,  m)
conn.reply(m.chat, global.wait, m)
try {
let q = '128kbps'
let v = args[0]
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v)).catch(async _ => await youtubedlv3(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
let cap = `╭─⬣「 *YouTube Download* 」⬣\n│  ≡◦   *🍭 Título:* ${ttl}\n│  ≡◦ *⚖️ Peso:* ${size}\n╰─⬣`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', fileName: `${ttl}.mp3`}, { quoted: m })
} catch {
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${args[0]}`)   
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let cap2 = `╭─⬣「 *YouTube Download* 」⬣\n│  ≡◦   *🍭 Título:* ${n}\n│  ≡◦ *⚖️ Peso:* ${n3}\n╰─⬣`.trim()
await conn.sendMessage(m.chat, { document: { url: n2 }, caption: cap2, mimetype: 'audio/mpeg', fileName: `${n}.mp3`}, {quoted: m})
} catch {
await conn.reply(m.chat, '*☓ Ocurrió un error inesperado*', m)}
}}
handler.help = ['ytmp3doc <url>']
handler.tags = ['downloader']
handler.command = /^playaudiodoc|pdocaudio|docaudio|ytmp3doc|ytadoc|ytmp3.2|yta.2$/i
handler.limit = 1

export default handler


