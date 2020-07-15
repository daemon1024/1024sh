const readline = require("readline");
const process = require("process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loop = (str) => {
  str = str.split(" ");
  if (str[0] == "cd") {
    try {
      // Change the directory
      process.chdir(__dirname + "/" + str[1]);
    } catch (err) {
      console.error("error occured while " + "changing directory: " + err);
    }
  }
  rl.question(`>> ${process.cwd()} ~ `, loop);
};
rl.question(`>> ${process.cwd()} ~ `, loop);
