let handler = async (m, { command, usedPrefix, text }) => {
let which = command.replace(/eliminar/i, '')
if (!text) throw `*[βππππβ] πππ°π ${usedPrefix}list${which} πΏπ°ππ° ππ΄π π»π° π»πΈπππ°*`
let msgs = global.db.data.msgs
if (!text in msgs) throw `*[βππππβ] '${text}' π½πΎ ππ΄πΆπΈππππ°π³πΎ π΄π½ π»π° π»πΈπππ° π³π΄ πΌπ΄π½ππ°πΉπ΄π*`
delete msgs[text]
m.reply(`*[βππππβ] π΄π»πΈπΌπΈπ½πΎ π²πΎπ½ π΄ππΈππΎ π΄π½ π»π° π»πΈπππ° π³π΄ πΌπ΄π½ππ°πΉπ΄π π΄π» πΌπ΄π½ππ°πΉπ΄ π²πΎπ½ π΄π» π½πΎπΌπ±ππ΄ '${text}'*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'del' + v + ' <text>')
handler.tags = ['database']
handler.command = /^eliminar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
handler.register = true
export default handler