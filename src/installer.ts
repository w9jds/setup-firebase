import { getInput, startGroup, endGroup } from '@actions/core';
import { exec } from '@actions/exec';

export const install = async () => {
  startGroup('Firebase-Tools Installer');
  const version = getInput('tools-version');
  let command = 'npm install -g firebase-tools';

  if (version) {
    
    command = `${command}@${version}`;
  }

  await exec(command);
  endGroup();
}