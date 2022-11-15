import { sync } from "command-exists";
import {
  getInput,
  debug,
  startGroup,
  endGroup,
  setFailed,
} from "@actions/core";
import { exec } from "@actions/exec";

export const install = async () => {
  startGroup("Firebase-Tools Installer");
  const version = getInput("tools-version");
  let command = "npm install -g firebase-tools";

  if (!sync("npm")) {
    throw new Error(
      "npm is required to run this command, did you use actions/setup-node?"
    );
  }

  if (version) {
    debug(`Using version ${version}`);
    command = `${command}@${version}`;
  }

  await exec(command);
  endGroup();
};
