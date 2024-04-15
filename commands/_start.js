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

var mode = Bot.getProperty("mode");
if (mode == "On") {
  Bot.sendMessage(
    "*🚧 BOT UNDER MAINTENANCE 🚧*\n\n_The bot is currently under maintenance.\nYou will receive a notification as soon as correct operation resumes._\n\n⚙️ Developed By [𝐒ʜɪɴᴇɪ 𝐍ᴏᴜᴢᴇɴ](tg://openmessage?user_id=5572081489)"
  );
} else {
  Api.getChatMember({
    chat_id: "@MaximXBots", // Replace it with your chat id
    user_id: user.telegramid,
    on_result: "/quinx"
  });
  if (chat.just_created) {
    var statu = Libs.ResourcesLib.anotherChatRes("to", "global");
    statu.add(1);
    Api.sendMessage({
      chat_id: "5572081489",
      text:
        "🥳 *New User :* *" +
        statu.value() +
        "*\n\n*User :* [" +
        user.first_name +
        "]" +
        "(" +
        "tg://user?id=" +
        user.telegramid +
        ")\n*Username :* @" +
        user.username +
        " \n*ID :* " +
        user.telegramid +
        "",
      parse_mode: "Markdown"
    });
  }
}
