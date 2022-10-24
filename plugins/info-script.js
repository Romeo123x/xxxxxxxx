const fetch = require('node-fetch')
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://youtube.com/channel/UC7flTES4TqWBLOPxk25_tsA* (Wajib Subs Kalau Ga subs Gw Doain Error Mampus lu)
sc ini: https://youtube.com/channel/UC7flTES4TqWBLOPxk25_tsA
Tinggal Like and Subscribe Apa Susah Nya sih bang🥲`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'O W N E R','.owner', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.instagram.com/p/CH2cKXnHV3i/?igshid=YmMyMTA2M2Y=",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/CH2cKXnHV3i/?igshid=YmMyMTA2M2Y=", 
    title: 'NONAME',
    body: wm,
    thumbnail: thumb,
    sourceUrl: urlnya
  }
  } }) 
          }
handler.help = ['script']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

module.exports = handler