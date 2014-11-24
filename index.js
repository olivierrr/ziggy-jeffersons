
module.exports = function(ziggy) {
  ziggy.on('message', function (user, channel, message) {
    if(message.slice(0, 11) === '!jeffersons') {
      ziggy.say(channel, movinOnUp(message.slice(11).trim() || channel))
    }
  })
}

function movinOnUp (str) {
  return 'Movin\' on up, ' + str + ' !'
}