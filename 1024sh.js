const readline = require("readline");
const process = require("process");
const { spawn } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loop = (str) => {
  str = str.split(" ");
  if (str[0] == "cd") {
    try {
      // Change the directory
      process.chdir(process.cwd() + "/" + str[1]);
    } catch (err) {
      console.error("error occured while " + "changing directory: " + err);
    }
  } else if (str[0] == "") {
  } else {
    const cmd = spawn(str[0], str.slice(1));

    cmd.stdout.on("data", (data) => {
      console.log(`${data}`);
    });

    cmd.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
    });

    cmd.on("error", (error) => {
      console.error(`error: ${error.message}`);
    });
  }
  rl.question(`>> ${process.cwd()} ~ `, loop);
};
rl.question(`>> ${process.cwd()} ~ `, loop);
