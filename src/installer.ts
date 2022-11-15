import { getInput, warning, startGroup, setOutput, endGroup, info, setFailed } from '@actions/core';
import { exec } from '@actions/exec';

export const install = async () => {
  const version = getInput('tools-version');
  let command = 'npm install -g firebase-tools';

  if (version) {
    
    command = `${command}@${version}`;
  }

  await exec(command);
}