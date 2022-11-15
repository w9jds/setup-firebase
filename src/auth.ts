import { getInput, info, exportVariable, startGroup, endGroup } from '@actions/core';
import { writeFileSync } from 'fs';

export const login = async () => {
  startGroup('Firebase Authentication');
  let key = getInput('gcp_sa_key');
  const token = getInput('firebase_token');

  info(key);

  if (!key && !token) {
    throw new Error(
      'Either firebase_token or gcp_sa_key are required to authenticate firebase-tools'
    );
  }

  if (token) {
    info('Setting firebase token for use by CLI');
    await exportVariable('FIREBASE_TOKEN', token);
  } else if (key) {
    const pattern = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    if (pattern.test(key)) {
      const buffer = Buffer.from(key, 'base64');
      key = buffer.toString('ascii');
    }

    info('Storing service account key into /opt/gcp_key.json');
    writeFileSync('/opt/gcp_key.json', key);
    await exportVariable('GOOGLE_APPLICATION_CREDENTIALS', '/opt/gcp_key.json');
  }

  endGroup();
}