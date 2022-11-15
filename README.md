# setup-firebase (Alternative for [firebase-action](https://github.com/w9jds/firebase-action))

This action provides the following functionality for GitHub Actions:

- Install `firebase-tools` CLI for use inside the current job
- Specify which version of the CLI to install
- Allows you to configure authentication and project

# Usage

_**Important: For this action to work properly `actions/setup-node` needs to be used**_

See [action.yml](https://github.com/w9jds/setup-firebase/blob/main/action.yml)

**Basic:**
```yaml
steps:
  - uses: actions/checkout@master
  - uses: actions/setup-node@master
  - uses: w9jds/setup-firebase@main
    with:
      tools-version: 11.9.0
      firebase_token: ${{ secrets.FIREBASE_TOKEN }}
  - run: firebase deploy --only hosting
  - run: firebase deploy --only functions
```

The `tools-version` is optional. If not supplied it will install the latest version of `firebase-tools`. 

With some of the major versions removing and changing functionality, it is highly recommended you specify which version you want to use and upgrade as you need it.

# License
The scripts and documents in this project are released under the [MIT License](https://github.com/w9jds/setup-firebase/blob/main/LICENSE)