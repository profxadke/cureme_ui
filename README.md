# CureMe: Medical App

## Basically, what the name/description says.

Framework7 app created with following options:

```
{
  "cwd": "/home/rabin/Projects/cureme_custom_ui",
  "type": [
    "pwa",
    "capacitor"
  ],
  "name": "CureMe: Medical App",
  "framework": "svelte",
  "template": "tabs",
  "bundler": "vite",
  "cssPreProcessor": false,
  "theming": {
    "customColor": true,
    "color": "#c7b8ea",
    "darkMode": true,
    "iconFonts": true
  },
  "customBuild": false,
  "pkg": "io.framework7.cureme",
  "capacitor": {
    "platforms": [
      "ios",
      "android"
    ]
  }
}
```

## Install Dependencies

First of all we need to install dependencies, run in terminal
```
npm install -g npm pnpm
pnpm init
pnpm install
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build` - build web app for production
* 📱 `build-capacitor-ios` - build app and copy it to iOS capacitor project
* 📱 `build-capacitor-android` - build app and copy it to Android capacitor project

## Vite

There is a [Vite](https://vitejs.dev) bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Vite config located in `vite.config.js`.

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.
## Capacitor

This project created with Capacitor support. And first thing required before start is to add capacitor platforms, run in terminal:

```
npx cap add ios && npx cap add android
```

Check out [official Capacitor documentation](https://capacitorjs.com) for more examples and usage examples.

## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Capacitor Assets

Capacitor assets are located in `resources` folder which is intended to be used with `cordova-res` tool. To generate  mobile apps assets run in terminal:
```
npx cordova-res
```

Check out [official cordova-res documentation](https://github.com/ionic-team/cordova-res) for more usage examples.

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Svelte Documentation](https://framework7.io/svelte/)
* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

* [CureMe REST API](https://github.com/profxadke/cureme_api)
