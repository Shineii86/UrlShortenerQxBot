/*CMD
  command: /bitly
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
Send Any Long Link And I'll Shorten It For You!

_Developer @Shineii86_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


User.setProperty("longlink", message, "string")
var token = "aa42e205d8c25dccb5fbe5e99b8049340e01dfc2" //enter your bit.ly api token
var dlink = message
var url = "https://api-ssl.bitly.com/v4/shorten"
HTTP.post({
  url: url,
  headers: {"Authorization": "Bearer "+token+"",
    "Content-type": "application/json"
  },
  body: {"long_url": dlink},
  success: "/BitlyShort"
})
