import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\nπππππ πΌ ππΌπΎππ½πππ ππππ ππ πΏππππππΌπΏ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `β¨ *ENLACE | URL:* ${url}`, m)
  let info = `πππ πΏπ΄π³πΈπ³πΎ π΅ππ΄ π΄π½ππΈπ°π³πΎ π²πΎπ½ ΓππΈππΎπ₯³ π³π΄ππ΄π°π πΏπ΄π³πΈπ π°π»πΆπΎ πΌΓππ©βπ»\n\nπππΎππ πΎππ³π΄π ππ°π ππ΄π½π πππ²π²π΄πππ΅ππ»π»π, π³πΎ ππΎπ ππ°π½ππ₯³ ππΎ πΎππ³π΄π ππΎπΌπ΄ππ·πΈπ½πΆ π΄π»ππ΄?π©βπ»
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, md, 'πΆπΈππ·ππ±', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.exp = 35
handler.limit = 2
handler.register = true
export default handler
