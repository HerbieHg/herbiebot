let handler = async (m, { conn, text, participants }) => {
	let member = participants.map(u => u.id)
	if(!text) {
		var sum = member.length
	} else {
		var sum = text
	}
	var total = 0
	var sider = []
	for(let i = 0; i < sum; i++) {
		let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
		if((typeof global.DATABASE.data.users[member[i]] == 'undefined' || global.DATABASE.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
			if (typeof global.DATABASE.data.users[member[i]] !== 'undefined'){
				if(global.DATABASE.data.users[member[i]].whitelist == false){
					total++
					sider.push(member[i])
				}
			}else {
				total++
				sider.push(member[i])
			}
		}
	}
	if(total == 0) return conn.reply(m.chat, `βγππ ππ ππ πππππππππ ππππΓπ ππππππππγ\nβββββΧβΧβΧβΧβββ`, m) 
	m.reply(`βγπππππππππ πππ πππππππππγ\nββGrupo: ${conn.getName(m.chat)}\nββParticipantes: ${sum}\nβγπ»πππππ ππ πππππππππππππ πππππππππ π»γ\n${sider.map(v => '  ββπ»ππ» @' + v.replace(/@.+/, '')).join('\n')}\nββNota: Esto puede no ser 100% acertado\nβββββΧβΧβΧβΧβββ`, null, { mentions: sider })
}

handler.help = ['verfantasmas']
handler.tags = ['group']
handler.command = /^(verfantasmas|fantasmas|sider|Sider)$/i

handler.admin = true
handler.botAdmin = true
handler.fail = null
handler.limit = 1
handler.register = true
export default handler