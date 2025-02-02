# Mobile Application Boilerplate for Full Stack Assessment

This is intended to be used with the [Back End Boilerplate](https://github.com/Haut-Technologies/back-end-boilerplate) where `backEndURLBase` in `App.tsx` should be changed to the back end server's address. If you aren't running the back end server on the same machine as what you run `npm run schema` on then you'll also need to modify `package.json` appropriately.

## Quick start

Install docker and docker-compose

- For Debian based Linux distributions (includes Ubuntu):
  - `sudo apt install docker.io`
  - `sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
  - `sudo chmod +x /usr/local/bin/docker-compose`
- For MacOS:
  - `brew install --cask docker`
- For Windows: https://docs.docker.com/desktop/windows/install/

Then run the commands in the next sections within a Docker container by running

```sh
docker-compose run --service-ports --rm haut-rn
```

> Run `sudo docker-compose` instead of `docker-compose` if your host OS in Linux

## Testing with Expo Go App

Install Expo Go app on a test device: https://expo.dev/client

Then run these commands

```sh
npm install # install project dependencies
npm run schema # fetches the GraphQL schema from the server
npm run relay # generates types and code for the GraphQL client
npm start # start development server and test application using expo go mobile app
```

> Scanning the generated QR code through Expo Go on Android may not work so try to "Enter URL manually" by copying the URL printed by `npm start` e.g.
> `› Metro waiting on exp://ek-939.clearcharles.haut-rn.exp.direct:80`

## Using VSCode for Editing

The following extensions are used by the team:

- ESLint `dbaeumer.vscode-eslint`
- GraphQL `GraphQL.vscode-graphql`
- Prettier - Code formatter `esbenp.prettier-vscode`
