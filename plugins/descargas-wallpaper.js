import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}šæšš½š ššš¾ššš½šš šš šššš½šš\nššššššš\n*${usedPrefix + command} hades*\n\n šš¼šš\nššš¼šššš\n*${usedPrefix + command} Cat*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*šš“ššš»šš°š³š¾ š³š“ ${text}*`, m)
  
  conn.sendHydrated(m.chat, `š šššØšŖš”š©ššš¤ | šššØšŖš”š©: ${text}`, `šš¤š£šš¤ | šš„ | ${wm}`, img, img, 'āļø ššš', null, null, [
['āļøššššŖššš£š©šā¶ļø | šššš­š©', `${usedPrefix + command} ${text}`],
['š·š°šµš»š¬š¹š¬šŗš»', '/pinterest'],
['š®š¶š¶š®š³š¬','/image'],
], m)
  
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.exp = 29
handler.limit = 2
handler.register = true
export default handler 
