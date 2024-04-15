/*CMD
  command: /quinx
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var status = options.result.status

var quinx =
  status == "member" || status == "administrator" || status == "creator"

if (quinx) {
  var button = [
    [{ text: "𝐂ʀᴇᴀᴛᴇ 𝐋ɪɴᴋ", callback_data: "/shortlink" }],
    [
      { text: "𝐔ᴘᴅᴀᴛᴇs", url: "t.me/MaximXBots" },
      { text: "𝐃ᴇvᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
      { text: "𝐒ᴜᴘᴘᴏʀᴛ", url: "t.me/MaximXGroup" }
    ],
    [{ text: "𝐂ʟᴏsᴇ", callback_data: "/close" }]
  ]
  Api.sendMessage({
    text:
      "<b>✨ Free <a href='https://tinyurl.com/app'>tinyurl.com</a> Shortener Bot ✨</>\n\n<blockquote><i>🔹 Better quality links shortening\n🔹 Permanent shortened URLs\n🔹 Ad-free redirecting to the original URL</i></blockquote>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: button }
  })
  return
}
Api.sendPhoto({
  photo: "https://telegra.ph/file/be9ad73326e879c130c97.jpg",
  caption:
    "*Please join my channel to use this bot!*\n\nTo join my *Channel*, click on the button below, and then come back and click on the *Refresh* button",
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🔹 𝐓ᴇʀᴍs 𝐀ɴᴅ 𝐂ᴏɴᴅɪᴛɪᴏɴs 🔹",
          web_app: {
            url:
              "https://bot.telescope.workers.dev/open/BQACAgUAAx0EWiS9TAACEtNmFqkD-3YzrIzUhc8ad1ZpdVoz8AAC5AwAAk-puFTVTT5SAsjxGDQE/vTelegraphBot.html"
          }
        }
      ],
      [
        { text: "⛩️ 𝐂ʜᴀɴɴᴇʟ", url: "t.me/MaximXBots" },
        { text: "𝐃ᴇvᴇʟᴏᴘᴇʀ ✨", url: "t.me/Shineii86" }
      ],
      [
        { text: "♻️ 𝐑ᴇғʀᴇsʜ", callback_data: "/start" },
        { text: "𝐂ʟᴏsᴇ ⛔", callback_data: "/close" }
      ]
    ]
  }
})

