import { getInput, debug, error, setSecret, startGroup, endGroup } from '@actions/core';
import { exec } from '@actions/exec';

export const login = async () => {
  startGroup('Firebase Authentication');
  setSecret('gcp_sa_key');
  setSecret('firebase_token');

  const key = getInput('gcp_sa_key');
  const token = getInput('firebase_token');

  if (!key && !token) {
    throw new Error(
      'Either firebase_token or gcp_sa_key are required to authenticate firebase-tools'
    );
  }

  if (token) {
    await exec(`export FIREBASE_TOKEN=${token}`);
  }

  if (key) {
    debug('Storing service account key into /opt/gcp_key.json');
    // TODO copy file here (check if it's encoded)

    await exec('export GOOGLE_APPLICATION_CREDENTIALS=/opt/gcp_key.json');
  }
  endGroup();
}