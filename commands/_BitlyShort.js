/*CMD
  command: /BitlyShort
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// var lolink = User.getProperty("longlink")
let val = JSON.parse(content)
let short = val.link
let err = val.status_txt

if (err == "INVALID_URL") {
  Bot.sendMessage("*Seems, this is not a valid URL link*")
  return
}

var button = [
  [
    { text: "𝐍ᴇᴡ 𝐋ɪɴᴋ", callback_data: "/bitly" },
    { text: "𝐃ᴇʟᴇᴛᴇ 𝐋ɪɴᴋ", callback_data: "/close" }
  ],
  [{ text: "𝐇ᴏᴍᴇ", callback_data: "/start" }]
]

// Sending the photo with caption and button
Api.sendPhoto({
  photo: "https://telegra.ph/file/be9ad73326e879c130c97.jpg",
  caption:
    "<i>🔗 Your Short Link Has Been Created Successfully: " +
    short +
    "</i>\n\n<b>Shortner By @MultiFunctionsBot</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

