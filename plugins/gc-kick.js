import { areJidsSameUser } from '@adiwajshing/baileys'
let handler = async (m, { conn, participants }) => {
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ β οΈ ] π΄π» πΎππ½π΄π ππΈπ΄π½π΄ ππ΄ππππΈπ½πΆπΈπ³πΎ (ππππππ ππππππππ / πππππππ ππππππππ) π΄π» πππΎ π³π΄ π΄πππ΄ π²πΎπΌπ°π½π³πΎ*'
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res)
await delay(1 * 1000)
}}
handler.help = ['kick @user']
handler.tags = ['group']
handler.command = /^(restrict|sacar|\-)$/i
handler.limit = 1
handler.register = true
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
