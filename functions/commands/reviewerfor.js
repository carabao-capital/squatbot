const lib = require('lib')({token: process.env.STDLIB_TOKEN});

let devs_id = ["U5RT71ZKQ", "U0YL17DBQ", "U4TDX4QSH", "U4SK3RBPS", "U5X3KN2AV", "U5AG3CY7M", "U4X6FDG95"]

let devs = [
  "dc",
  "earle",
  "francis",
  "nmfdelacruz",
  "sachink",
  "vicente",
  "yogesh.khater"
]

let count = 0

/**
* /hello
*
*   Basic "Hello World" command.
*   All Commands use this template, simply create additional files with
*   different names to add commands.
*
*   See https://api.slack.com/slash-commands for more details.
*
* @param {string} user The user id of the user that invoked this command (name is usable as well)
* @param {string} channel The channel id the command was executed in (name is usable as well)
* @param {string} text The text contents of the command
* @param {object} command The full Slack command object
* @param {string} botToken The bot token for the Slack bot you have activated
* @returns {object}
*/
module.exports = (user, channel, text = '', command = {}, botToken = null, callback) => {
  if(user.toString() === devs_id[count%devs_id.length].toString()) { count+=1 }

  callback(null, {
    text: `Hi <@${devs_id[count%devs_id.length]}>! <@${user}> asked you to code review his PR ${text}`
  });

  count+=1
};
