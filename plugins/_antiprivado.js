export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
if (m.text.includes('a') || m.text.includes('hola') || m.text.includes('bot') || m.text.includes('grupos') || m.text.includes('menu') || m.text.includes('help') || m.text.includes('reg') || m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('bot') || m.text.includes('info') || m.text.includes('estado') || m.text.includes('menu2') || m.text.includes('owner') || m.text.includes('creador') || m.text.includes('join')) return !0
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
if (bot.antiPrivate && !isOwner && !isROwner) {
await m.reply(`*Holα @${m.sender.split`@`[0]}, no es permitido escribir αl privαdo del bot, αsí que serαs bloqueαdo por ser un gαy que no sαbe usαr el bot en grupo*`, false, { mentions: [m.sender] })
await this.updateBlockStatus(m.chat, 'block')}
return !1
}