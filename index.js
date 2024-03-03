const fs = require("fs");
const login = require("facebook-chat-api");
const credentials = { appState: JSON.parse(fs.readFileSync("appstate.json", "utf8")) };

login(credentials, (err, api) => {
  if (err) return console.error(err);
  api.sendMessage("[BOT] Nhớ uống nước nhen uống bây giờ đi á!", process.env.THREAD_ID);
});