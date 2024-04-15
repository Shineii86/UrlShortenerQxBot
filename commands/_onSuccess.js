/*CMD
  command: /onSuccess
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

var button = [[{ text: "𝐍ᴇᴡ 𝐋ɪɴᴋ", callback_data: "/shortlink" },{ text: "𝐃ᴇʟᴇᴛᴇ 𝐋ɪɴᴋ", callback_data: "/close" }]]

// Sending the photo with caption and button
Api.sendPhoto({
  photo: "https://telegra.ph/file/be9ad73326e879c130c97.jpg",
  caption:
    "<i>🔗 Your Short Link Has Been Created Successfully: " +
    content +
    "</i>\n\n<b>Shortner By @UrlShortnerQxBot</b>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

