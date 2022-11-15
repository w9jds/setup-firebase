import { getInput, debug } from "@actions/core"
import { exec } from "@actions/exec";

export const setupProject = async () => {
  const projectId = getInput('project_id');
  const path = getInput('project_path');

  if (path) {
    await exec(`cd ${path}`);
  }

  if (projectId) {
    await exec(`firebase use --add ${projectId}`);
  }
}