import { getInput, debug, startGroup, endGroup } from "@actions/core";
import { exec } from "@actions/exec";

export const install = async () => {
  startGroup("Firebase-Tools Installer");
  const version = getInput("tools-version");

  let command = "npm install -g firebase-tools";

  if (version) {
    debug(`Using version ${version}`);
    command = `${command}@${version}`;
  }

  await exec("curl -sL firebase.tools | bash");
  endGroup();
};
