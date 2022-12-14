import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[βππππβ] ππ΄ππΏπΎπ½π³π° π°π» π°ππ³πΈπΎ πππ΄ π³π΄ππ΄π° π²πΎπ½ππ΄πππΈπ π΄π½ ππΈπ³π΄πΎ π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw `*[βππππβ] ππ΄ππΏπΎπ½π³π° π°π» π°ππ³πΈπΎ πππ΄ π³π΄ππ΄π° π²πΎπ½ππ΄πππΈπ π΄π½ ππΈπ³π΄πΎ π²πΎπ½ π΄π» π²πΎπΌπ°π½π³πΎ ${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '*DONE*', m, 0, { thumbnail: out })
}
handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = ['tovideo']
handler.limit = 1
handler.register = true
export default handler
