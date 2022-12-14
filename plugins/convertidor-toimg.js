import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `*[βππππβ] ππ΄ππΏπΎπ½π³π° π°π» πππΈπ²πΊπ΄π πππ΄ π³π΄ππ΄π΄ π²πΎπ½ππ΄πππΈπ π΄π½ πΈπΌπ°πΆπ΄π½ π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command}*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
handler.limit = 1
handler.register = true
export default handler
