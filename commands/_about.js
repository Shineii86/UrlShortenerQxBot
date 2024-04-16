/*CMD
  command: /about
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

Api.sendMessage({
  text:
    "*🤖 Bot Information*\n*» Version:* βeta\n\n*👤 Developer*\n*» Name:* Shinei Nouzen 🇮🇳\n*» Username:* @Shineii86\n*» Email:* ikx7a@hotmail.com\n\n*💸 Sponsor*\n*» Name:* Haruno Yukki 🇯🇵\n*» Username:* @YukkiHaruno\n*» Pinterest:* [@YukkiHaruno](https://www.pinterest.com/YukkiHaruno)\n\n*🔗 Important Links*\n*» News:* @MaximXBots\n*» Status:* @MaximXStatus\n*» Support:* @MaximXGroup\n\n*🌐 Hosting Server*\n*» Heroku:* [Source Code](https://www.heroku.com/)",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "𝐇ᴏᴍᴇ", callback_data: "/start" },
        { text: "𝐂ʟᴏsᴇ", callback_data: "/close" }
      ]
    ]
  }
})

