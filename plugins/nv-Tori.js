import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
let vn = './media/Tori.mp3'
conn.sendFile(m.chat, vn, 'Tori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /tori|Tori/
handler.command = new RegExp
handler.register = true
export default handler

