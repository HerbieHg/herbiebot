let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `*[βππππβ] π»π°π π΅ππ½π²πΈπΎπ½π΄π πΏπ°ππ° ππ΄π π±πΎπ (#ππππππ, #πππππππ, #ππππ, #πππππππ, #πππππππ, #πππππππππ) π½πΎ π΄πππ°π½ π°π²πππ°π»πΌπ΄π½ππ΄ π΅ππ½π²πΈπΎπ½π°π»π΄π πΏπ°ππ° π΄πππ΄ π±πΎπ (πππππππππ)*
*β https://youtu.be/aPu9wQi-z8U*
γ€`
let buttonMessage= {
'document': { url: `https://github.com/HerbieHg/herbiebot` },
'mimetype': `application/${document}`,
'fileName': `πππππππππ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/HerbieHg/herbiebot',
'mediaType': 2,
'previewType': 'pdf',
'title': 'α΄Κ α΄α΄α΄α΄Κ Κα΄α΄ α΄α΄ α΄‘Κα΄α΄sα΄α΄α΄β©',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}instalarbot`, buttonText: {displayText: 'πΈπ½πππ°π»π°ππ±πΎπ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(jadibot|serbot|bots|subbots|getcode)/i
handler.limit = 1
handler.register = true
export default handler

