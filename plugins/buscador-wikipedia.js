import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `[βοΈππππβοΈ] π΄πππ°π πππ°π½π³πΎ πΌπ°π» π΄π» π²πΎπΌπ°π½π³πΎ!!*\n*πππΎ π²πΎπππ΄π²ππΎ:*\n*${usedPrefix + command} πΏππππππ πππππ π ππππππ*\n\n*π΄πΉπ΄πΌπΏπ»πΎ:*\n*${usedPrefix + command} Hades`
wikipedia(`${text}`).then(res => {
let info = `πππ πΏπ΄π³πΈπ³πΎ π΅ππ΄ π΄π½ππΈπ°π³πΎ π²πΎπ½ ΓππΈππΎπ₯³ π³π΄ππ΄π°π πΏπ΄π³πΈπ π°π»πΆπΎ πΌΓππ©βπ»\n\nπππΎππ πΎππ³π΄π ππ°π ππ΄π½π πππ²π²π΄πππ΅ππ»π»π, π³πΎ ππΎπ ππ°π½ππ₯³ ππΎ πΎππ³π΄π ππΎπΌπ΄ππ·πΈπ½πΆ π΄π»ππ΄?π©βπ»\n\n` + res.result.isi
conn.sendHydrated(m.chat, info, wm, null, md, 'πΆπΈππ·ππ±', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)   
  
}).catch(() => { m.reply(`[βοΈππππβοΈ] π½πΎ ππ΄ π΄π½π²πΎπ½πππΎ π½πΈπ½πΆππ½π° πΈπ½π΅πΎππΌπ°π²πΈπΎπ½, πΏπππ΄π±π° πππ΄ π·π°ππ°π π΄ππ²ππΈππΎ ππ½π° ππΎπ»π° πΏπ°π»π°π±ππ° π π»πΎ π·π°ππ°π π΄ππ²ππΈππΎ π²πΎπππ΄π²ππ°πΌπ΄π½ππ΄`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = /^(wiki|wikipedia)$/i 
handler.exp = 40
handler.register = true
handler.limit = 2
export default handler
