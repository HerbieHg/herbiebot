import fs from 'fs'
let handler = async (m, { conn }) => {
let prem = global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)

await conn.reply(m.chat, `*β­β[ ππππΌππππ πππ | πππππππ πππππ ]ββ¬£*\n*β*\n` + prem.map(v => '*β* β₯ π @' + v.replace(/@.+/, ' π')).join`\n`, m, { contextInfo: { mentionedJid: prem } }) 
   
  let text = `πππ πππ!!  ππππ!! β¨`.trim()   
await conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'βΝΝ‘β£πππππ_πππβΝΝ‘β£|YOVANI ',
body: 'Super Bot WhatsApp',         
previewType: 1, thumbnail: fs.readFileSync("./src/admins.jpg"),
sourceUrl: `${yt}`}}})
   
await conn.sendHydrated(m.chat, null, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['ππππππ', '#estado'],
['ππππ', '.menu']
], m,)
   
}
handler.help = ['premlist']
handler.tags = ['owner']
handler.command = /^(listprem|premlist)$/i
handler.limit = 1
handler.register = true
export default handler
