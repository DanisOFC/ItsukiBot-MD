//By https://github.com/FG98F/dylux-fg

import yts from 'yt-search'
import { youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let limit = 150 //Si tu servidor tiene mas de 2GB de memoria Ram peudes subir el límite
let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  
    if (!text) throw `▶⏸ *PLAY*\n\nQué estás buscando?`
  let chat = global.db.data.chats[m.chat]
  let res = await yts(text)
  //let vid = res.all.find(video => video.seconds < 3600)
  let vid = res.videos[0]
  if (!vid) throw `Vídeo/Audio no encontrado`
  let isVideo = /2$/.test(command)
  try {
  let q = isVideo ? '360p' : '128kbps' 
  let v = vid.url
  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())
  let title = await yt.title
  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)
  let play = `╭─⬣「 *YouTube Play* 」⬣
│  ≡◦ *🍭 Título:* ${vid.title}
│  ≡◦ *📅 Publicado:* ${vid.ago}
│  ≡◦ *🕜 Duración:* ${vid.timestamp}
│  ≡◦ *👁 Vistas:*  ${vid.views}
╰─⬣`
conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null)

if (size.split('MB')[0] >= limit) return m.reply(`_Archivo por encima de_ *+${limit}*`) 
if (size.includes('GB')) return m.reply(`_Tu archivo supera mi límite es_ *+${limit} MB*`)   
	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `╭─⬣「 *YouTube Play* 」⬣
│  ≡◦   *🍭 Título:* ${title}
│  ≡◦ *🎞️ Calidad:* ${q}
│  ≡◦ *⚖️ Peso:* ${size}
╰─⬣`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })
    } catch {
		m.reply(global.eror)
    }

}
handler.help = ['play', 'play2']
handler.tags = ['downloader']
handler.command = ['play', 'play2']

export default handler