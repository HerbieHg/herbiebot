let handler  = async (m, { conn, usedPrefix, command }) => {
let res = "https://recoders-area.caliph.repl.co/api/lolivid"
conn.sendHydrated(m.chat, null, null, res, null, null, null, null, [['âï¸ðð¸ð¶ðð¸ð´ð½ðð´â¶ï¸', `/${command}`]], m)}
handler.help = ['lolivid']
handler.tags = ['random']
handler.command = /^(lolivid|lolivideos|lolÃ­vid)$/i
handler.limit = 1
handler.register = true
export default handler
