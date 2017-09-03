[![Travis Build Status][build-badge]][build]
[![Apache 2 License][license-badge]][license]

# Introduction

Spaarpot, money management made easy!

## To build for development

Clone the repository, and install dependencies.

``` bash
git clone https://github.com/spaarpot/desktop-client.git
npm install
```

- **in a terminal window** -> npm start  
- **in another terminal window** -> npm run electron:serve

Voila! You can use your Angular + Electron app in a local development environment with hot reload!

The application code is managed by `main.ts`. In this sample, the app runs with a simple Electron window and "Developer Tools" is open.  
The Angular component contains an example of Electron and NodeJS native lib import. See [Use NodeJS Native libraries](#use-nodejs-native-libraries) chapter if you want to import other native libraries in your project.  
You can deactivate "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## To build for production

- Using development variables (environments/index.ts) :  `npm run electron:dev`
- Using production variables (environments/index.prod.ts) :  `npm run electron:prod`

Your built files are in the /dist folder.

## Included Commands

|Command|Description|
|--|--|
|`npm run start:web`| Execute the app in the brower |
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

**Your application is optimised. Only the files from the /dist folder are included in the executable.**

## Use NodeJS Native libraries

Actually Angular-Cli doesn't seem to be able to import nodeJS native libs or electron libs at compile time (Webpack error). This is (one of) the reason why webpack.config was ejected of ng-cli.
If you need to use NodeJS native libraries, you **MUST** add it manually in the file `webpack.config.js` in root folder :

```javascript
  "externals": {
    "electron": 'require(\'electron\')',
    "child_process": 'require(\'child_process\')',
    "fs": 'require(\'fs\')'
    ...
  },
```

Notice that all NodeJS v7 native libs are already added in this sample. Feel free to remove those you don't need.

## Browser mode

Maybe you want to execute the application in the browser (WITHOUT HOT RELOAD ACTUALLY...) ? You can do it with `npm run start:web`.  
Note that you can't use Electron or NodeJS native libraries in this case. Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.

## Execute lint and tests

To lint the project and run the test once:

```bash
npm run lint
npm test
```

To continously watch for changes and re-run tests:

```bash
npm run testwatch
```

## Execute E2E tests

You can find end-to-end tests in /e2e folder.

You can run tests with the command lines below : 
- **in a terminal window** -> First, start a web server on port 4200 : `npm run start:web`  
- **in another terminal window** -> Then, launch Protractor (E2E framework): `npm run e2e`

[build-badge]: https://travis-ci.org/spaarpot/desktop-client.svg?branch=master
[build]:       https://travis-ci.org/spaarpot/desktop-client
[license-badge]: https://img.shields.io/badge/license-Apache2-blue.svg
[license]: https://github.com/spaarpot/desktop-client/blob/master/LICENSE.md
