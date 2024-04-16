/*CMD
  command: /start
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

var mode = Bot.getProperty("mode")
if (mode == "On") {
  Bot.sendMessage(
    "*🚧 BOT UNDER MAINTENANCE 🚧*\n\n_The bot is currently under maintenance.\nYou will receive a notification as soon as correct operation resumes._\n\n⚙️ Developed By [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)"
  )
} else {
  Api.getChatMember({
    chat_id: "@MaximXBots", // Replace it with your chat id
    user_id: user.telegramid,
    on_result: "/quinx"
  })
  {
    {
      // Check if the user is new by checking for the presence of a property indicating they've been seen before
      var isNewUser = !User.getProperty("seen")

      if (isNewUser) {
        var statu = Libs.ResourcesLib.anotherChatRes("to", "global")
        statu.add(1)
        var logsChannelId = "-1002078281897" // Replace with the actual ID of your logs channel

        var currentDate = new Date().toLocaleDateString("en-US", {
          timeZone: "Asia/Kolkata"
        }) // Get the current date in Asia/Kolkata timezone
        var currentTime = new Date().toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata"
        }) // Get the current time in Asia/Kolkata timezone
        var botName = bot.name // Get the name of your bot

        Api.sendMessage({
          chat_id: logsChannelId,
          text:
            "🥳 *New User Notification* 🔔" +
            "\n\n*➲ User:* [" +
            user.first_name +
            "](tg://user?id=" +
            user.telegramid +
            ")" +
            "\n*➲ Username:* @" +
            user.username +
            "\n*➲ ID:* " +
            user.telegramid +
            "\n\n*➲ Date:* " +
            currentDate +
            "\n*➲ Time:* " +
            currentTime +
            "\n*➲ Bot Name:* @" +
            botName +
            "\n*➲ Total Users:* " +
            statu.value(1),
          parse_mode: "Markdown"
        })

        // Set the 'seen' property to indicate that the user has been seen
        User.setProperty("seen", true, "boolean")
      }
    }
  }
}
