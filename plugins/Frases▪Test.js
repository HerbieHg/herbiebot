import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
let res = await fetch("https://api.zacros.my.id/randomtext/fml")
let json = await res.json()
let { result } = json
conn.reply(m.chat, `βγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γ\nββπ ${result}\nβββββΧ`, m)}
handler.command = /^(frasetest)$/i
handler.limit = 1
handler.register = true
export default handler