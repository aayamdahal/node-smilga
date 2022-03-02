const os = require("os");

// info about the current user
const user = os.userInfo;
console.log(user.username);

// info about system runtime in seconds
const time = os.uptime();
console.log(time);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
