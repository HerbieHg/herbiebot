import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
βββγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· πβ¨
ββNIVEL
βββ’ Nombre : *${name}*
βββ’ Nivel : *${user.level}*
βββ’ XP : *${user.exp - min}/${xp}*
ββTe falta *${max - user.exp}* de *XP* para subir de nivel
βββββΧβΧβΧβΧβββ`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
βββγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββΰΉΫ£ΫΝ‘ΝΫππ¨π₯πΰ¦ΰ§£Ν‘Να·Φ³α· πβ¨
ββΰΉLEVEL UP*
ββΰΉNivel anterior : *${before}*
ββΰΉNivel actual : *${user.level}*
ββCuanto mΓ‘s interactΓΊes con los bots, mayor serΓ‘ tu nivel_*
βββββΧβΧβΧβΧβββ`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'https://i.imgur.com/AYfkKZB.jpeg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']
handler.register = true
handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
