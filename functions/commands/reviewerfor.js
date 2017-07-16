const lib = require('lib')({token: process.env.STDLIB_TOKEN});

let seniorDevIds = [
  "U4SK3RBPS",
  "U5AG3CY7M"
];

let devIds = [
  "U5RT71ZKQ",
  "U0YL17DBQ",
  "U4TDX4QSH",
  "U5X3KN2AV",
  "U4X6FDG95"
];

/**
* @dc = "U5RT71ZKQ",
* @earle = "U0YL17DBQ",
* @francis = "U4TDX4QSH",
* @nmfdelacruz = "U4SK3RBPS",
* @sachink = "U5X3KN2AV",
* @vicente = "U5AG3CY7M",
* @yogesh.khather "U4X6FDG95"
*/

/**
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
  let randomDevId;
  let randomSeniorDevId;

  do {
    randomDevId = Math.floor(Math.random() * (devIds.length));
  } while(devIds[randomDevId] === user)


  do {
    randomSeniorDevId = Math.floor(Math.random() * (seniorDevIds.length));
  } while(seniorDevIds[randomSeniorDevId] === user)

  callback(null, {
    text: `Hi <@${devIds[randomDevId]}> and <@${seniorDevIds[randomSeniorDevId]}>!
    <@${user}> asked you guys to code review this PR here ${text}`
  });
};
