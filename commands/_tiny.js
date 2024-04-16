/*CMD
  command: /tiny
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


function validURL(url) {
  var regex = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  return regex.test(url)
}

if (validURL(message)) {
  // Use HTTP.get to call the TinyURL API and shorten the URL
  HTTP.get({
    url: "http://tinyurl.com/api-create.php?url=" + message,
    success: "/TinyShort"
  })
} else {
  Bot.sendMessage("Wrong URL\nExample : `https://t.me/Shineii86`")
}

