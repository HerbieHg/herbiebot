/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${mg}πππππππ ππ ππππ½ππ πΏπ ππππΌπππ πΏπ πππππΌπππΌπ ππΌππΌ πΏπππΎπΌπππΌπ ππΌπ ππππππππΌπ\nπππππππ\n*${usedPrefix + command} hades*\n\nπππππ πππππΌπππΌπ ππππππΌππ ππ πΏππππππΌπΏ πππππππ\nπππΌππππ\n*${usedPrefix + command} Hades-bot`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `πππ πΏπ΄π³πΈπ³πΎ π΅ππ΄ π΄π½ππΈπ°π³πΎ π²πΎπ½ ΓππΈππΎπ₯³ π³π΄ππ΄π°π πΏπ΄π³πΈπ π°π»πΆπΎ πΌΓππ©βπ»\n\nπππΎππ πΎππ³π΄π ππ°π ππ΄π½π πππ²π²π΄πππ΅ππ»π»π, π³πΎ ππΎπ ππ°π½ππ₯³ ππΎ πΎππ³π΄π ππΎπΌπ΄ππ·πΈπ½πΆ π΄π»ππ΄?π©βπ»
  `.trim()  
await conn.sendHydrated(m.chat, info, wm, null, md, 'πΆπΈππ·ππ±', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.limit = 3
handler.register = true
handler.exp = 87
export default handler
