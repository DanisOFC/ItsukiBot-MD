
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ El usuario no se encuentra en mi base de datos`
    let bank = `┌───⊷ *BALANCE* ⊶
▢ *💎Diamantes* : _${user.diamond}_
▢ *⬆️XP* : _Total ${user.exp}_
└──────────────

*NOTA :* 
Puedes comprar 💎 diamantes usando los comandos
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`.trim();
    conn.sendMessage(
    m.chat,
    {
      image: {
        url: "https://telegra.ph/file/e01c177fb1c61f453c659.jpg",
      },
      caption: bank,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: botname,
          sourceUrl: global.linkgc,
          mediaType: 1,
          showAdAttribution: true,
          thumbnailUrl: "https://telegra.ph/file/4a337bdef796355491b43.jpg",
        },
      },
    },
    {
      quoted: m,
    }
  );
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 

export default handler
