let handler = async function (m, { conn, __dirname }) {
 m.reply(`*Github de este bot:*\nhttps://github.com/DanisOFC/ItsukiBot-MD`)
}

handler.help = ['script']
handler.tags = ['main']
handler.command = /^(sc|git|script)$/i

export default handler
