const roles = {
    '*NOVATO(A) V* ðŠĪ': 0,
     '*NOVATO(A) IV* ðŠĪ': 1,
      '*NOVATO(A) III* ðŠĪ': 2,
       '*NOVATO(A) II* ðŠĪ': 3,
        '*NOVATO(A) I* ðŠĪ': 4,
    '*APRENDIS V* ðŠ': 5,
     '*APRENDIS IV* ðŠ': 6,
      '*APRENDIS III* ðŠ': 7,
       '*APRENDIS II* ðŠ': 8,
       '*APRENDIS I* ðŠ': 9,
    '*EXPLORADOR(A) V* ðŠ': 10,
     '*EXPLORADOR(A) IV* ðŠ': 11,
      '*EXPLORADOR(A) III* ðŠ': 12,
       '*EXPLORADOR(A) II* ðŠ': 13,
        '*EXPLORADOR(A) I* ðŠ': 14,
    '*MAESTRO(A) V* âïļ': 15,
     '*MAESTRO(A) IV* âïļ': 16,
      '*MAESTRO(A) III* âïļ': 17,
       '*MAESTRO(A) II* âïļ': 18,
        '*MAESTRO(A) I* âïļ': 19,
    '*IRON V* ðĶū': 20,
     '*IRON IV* ðĶū': 21,
      '*IRON III* ðĶū': 22,
       '*IRON II* ðĶū': 23,
        '*IRON I* ðĶū': 24,
    '*PLATA V* ðŪ': 25,
     '*PLATA IV* ðŪ': 26,
      '*PLATA III* ðŪ': 27,
       '*PLATA II* ðŪ': 28,
        '*PLATA I* ðŪ': 29,
    '*ORO V* ð': 30,
     '*ORO IV* ð': 31,
      '*ORO III* ð': 32,
       '*ORO II* ð': 33,
        '*ORO I* ð': 34,
    '*DIAMANTE V* ð': 35,
     '*DIAMANTE IV* ð': 36,
      '*DIAMANTE III* ð': 37,
       '*DIAMANTE II* ð': 38,
        '*DIAMANTE I* ð': 39,
    '*PRO EN GATABOT V* ðž': 40,
     '*PRO EN GATABOT IV* ðž': 41,
      '*PRO EN GATABOT III* ðž': 42,
       '*PRO EN GATABOT II* ðž': 43,
        '*PRO EN GATABOT I* ðž': 44,
    '*SUPER PRO V* ðĐ': 45,
     '*SUPER PRO IV* ðĐ': 46,
      '*SUPER PRO III* ðĐ': 47,
       '*SUPER PRO II* ðĐ': 48,
        '*SUPER PRO I* ðĐ': 49,
    '*LEGENDARIO(A) V* ðĄïļ': 50,
     '*LEGENDARIO(A) IV* ðĄïļ': 51,
      '*LEGENDARIO(A) III* ðĄïļ': 52,
       '*LEGENDARIO(A) II* ðĄïļ': 53,
        '*LEGENDARIO(A) I* ðĄïļ': 54,
    '*LEYENDA V* ð': 55,
     '*LEYENDA IV* ð': 56,
      '*LEYENDA III* ð': 57,
       '*LEYENDA II* ð': 58,
       '*LEYENDA I* ð': 59,
    '*ESTELAR V* âïļ': 60,
     '*ESTELAR IV* âïļ': 61,
      '*ESTELAR III* âïļ': 62,
       '*ESTELAR II* âïļ': 63,
        '*ESTELAR I* âïļ': 64,
    '*TOP ASTRAL V* âïļðą': 65,
     '*TOP ASTRAL IV* âïļðą': 66,
      '*TOP ASTRAL III* âïļðą': 67,
       '*TOP ASTRAL II* âïļðą': 68,
        '*TOP ASTRAL I* âïļðą': 69,
    'ð *ÃLITE GLOBAL V* ð': 70,
     'ð *ÃLITE GLOBAL IV* ð': 75,
      'ð *ÃLITE GLOBAL III* ð': 80,
       'ð *ÃLITE GLOBAL II* ð': 85,
        'ð *ÃLITE GLOBAL I* ð': 90,
    'ð *â ÃLITE GLOBAL V* ðð': 100,
     'ð *â ÃLITE GLOBAL IV* ðð': 140,
    'ð *â ÃLITE GLOBAL III* ðð': 180,
    'ð *â ÃLITE GLOBAL II* ðð': 250,
    'ð *â ÃLITE GLOBAL I* ðð': 300
}

export function before(m) {
        let user = db.data.users[m.sender]
        let level = user.level
        let role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([, minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
        user.role = role
        return !0
    
}

/*let handler = m => m

handler.before = function (m, text) {
    let user = global.db.data.users[m.sender]
    let role = (user.level <= 3) ? '*NOVATO(A) III* ðŠĪ'
        : ((user.level >= 3) && (user.level <= 6)) ? '*NOVATO(A) II* ðŠĪ'
            : ((user.level >= 6) && (user.level <= 9)) ? '*NOVATO(A) I* ðŠĪ'
                : ((user.level >= 9) && (user.level <= 12)) ? '*APRENDIS III* ðŠ'
                    : ((user.level >= 12) && (user.level <= 15)) ? '*APRENDIS II* ðŠ'
                        : ((user.level >= 15) && (user.level <= 18)) ? '*APRENDIS I* ðŠ'
                            : ((user.level >= 18) && (user.level <= 21)) ? '*EXPLORADOR(A) III* ðŠ'
                                : ((user.level >= 21) && (user.level <= 24)) ? '*EXPLORADOR(A) II* ðŠ'
                                    : ((user.level >= 24) && (user.level <= 27)) ? '*EXPLORADOR(A) I* ðŠ'
                                        : ((user.level >= 27) && (user.level <= 30)) ? '*MAESTRO(A) III* âïļ'
                                            : ((user.level >= 30) && (user.level <= 33)) ? '*MAESTRO(A) II* âïļ'
                                                : ((user.level >= 33) && (user.level <= 36)) ? '*MAESTRO(A) I* âïļ'
                                                    : ((user.level >= 36) && (user.level <= 39)) ? '*IRON III* ðĶū'
                                                        : ((user.level >= 39) && (user.level <= 42)) ? '*IRON II* ðĶū'
                                                            : ((user.level >= 42) && (user.level <= 45)) ? '*IRON I* ðĶū'
                                                                : ((user.level >= 45) && (user.level <= 48)) ? '*PLATA III* ðŪ'
                                                                    : ((user.level >= 48) && (user.level <= 51)) ? '*PLATA II* ðŪ'
                                                                        : ((user.level >= 51) && (user.level <= 54)) ? '*PLATA I* ðŪ'
                                                                            : ((user.level >= 54) && (user.level <= 57)) ? '*ORO III* ð'
                                                                                : ((user.level >= 57) && (user.level <= 60)) ? '*ORO II* ð'
                                                                                    : ((user.level >= 60) && (user.level <= 63)) ? '*ORO I* ð'
                                                                                        : ((user.level >= 63) && (user.level <= 66)) ? '*DIAMANTE III* ð'
                                                                                            : ((user.level >= 66) && (user.level <= 69)) ? '*DIAMANTE II* ð'
                                                                                                : ((user.level >= 69) && (user.level <= 71)) ? '*DIAMANTE I* ð'
                                                                                                    : ((user.level >= 71) && (user.level <= 74)) ? '*PRO EN GATABOT III* ðž'
                                                                                                        : ((user.level >= 74) && (user.level <= 77)) ? '*PRO EN GATABOT II* ðž'
                                                                                                            : ((user.level >= 77) && (user.level <= 80)) ? '*PRO EN GATABOT I* ðž'
                                                                                                                : ((user.level >= 80) && (user.level <= 83)) ? '*SUPER PRO III* ðĐ'
                                                                                                                    : ((user.level >= 83) && (user.level <= 86)) ? '*SUPER PRO II* ðĐ'
                                                                                                                        : ((user.level >= 86) && (user.level <= 89)) ? '*SUPER PRO I* ðĐ'
                                                                                                                            : ((user.level >= 89) && (user.level <= 91)) ? '*LEGENDARIO(A) III* ðĄïļ'
                                                                                                                                : ((user.level >= 91) && (user.level <= 94)) ? '*LEGENDARIO(A) II* ðĄïļ'
                                                                                                                                    : ((user.level >= 94) && (user.level <= 97)) ? '*LEGENDARIO(A) I* ðĄïļ'
                                                                                                                                        : ((user.level >= 97) && (user.level <= 100)) ? '*LEYENDA III* ð'
                                                                                                                                           : ((user.level >= 100) && (user.level <= 105)) ? '*LEYENDA II* ð'      
                                                                                                                                              : ((user.level >= 105) && (user.level <= 120)) ? '*LEYENDA I* ð'
                                                                                                                                                 : ((user.level >= 120) && (user.level <= 150)) ? '*ESTELAR III* âïļ'
                                                                                                                                                    : ((user.level >= 150) && (user.level <= 160)) ? '*ESTELAR II* âïļ'
                                                                                                                                                        : ((user.level >= 160) && (user.level <= 170)) ? '*ESTELAR I* âïļ'
                                                                                                                                                            : ((user.level >= 170) && (user.level <= 185)) ? '*TOP ASTRAL III* âïļðą'
                                                                                                                                                                : ((user.level >= 185) && (user.level <= 200)) ? '*TOP ASTRAL III* âïļðą'
                                                                                                                                                                    : ((user.level >= 200) && (user.level <= 700)) ? '*TOP ASTRAL III* âïļðą'
                                                                                                                                                                            : ((user.level >= 700) && (user.level <= 1000)) ? 'ð *ÃLITE GLOBAL* ð'
                                                                                                                                                                                : 'ð *â ÃLITE GLOBAL* ðð'


    user.role = role
    return true
} 

export default handler */
