import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg} ššš šæš šš¼ ššššššššš šš¼šššš¼\n*${usedPrefix + command} hades*\n\nššš š¾šššš¼ššæ šššš\n*${usedPrefix + command} Cat*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `š šššØšŖš”š©ššš¤ | šššØšŖš”š©: ${text}`, `š®š¶š¶š®š³š¬ | ${wm}`, link, link, 'āļø ššš', null, null, [
['āļøššššŖššš£š©šā¶ļø | ššš­š©', `/imagen ${text}`],
['š·š°šµš»š¬š¹š¬šŗš»', `#pinterest ${text}`],
['š“š¬šµš¼', `.menu`],  
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.limit = 2
handler.register = true
export default handler
