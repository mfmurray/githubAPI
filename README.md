## Description

This repository is a [React Native](https://facebook.github.io/react-native/) application. It contains the source code for a mobile app which reads commits from GitHub this Repository

## Dependencies

- node.js >=12 (recommended installation method: [nvm](https://github.com/nvm-sh/nvm))
- [yarn](https://yarnpkg.com/en/) >=1.12
- [React Native]() (63.0.x): Installing react native and running it on mobile emulators requires additional steps. Follow the instructions in [the React Native Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started) to setup the app to run on both iOS (requiring macOS and XCode) and Android using Android Studio.

## Installation

```
yarn install
```


## Recommended WorkFlow & Debugging for Developers

- React Native works best if you can run a simulator on the same computer and enable live reloading on the simulator.
- iOS is typically easier to work with.
- React native also has a [Debugger](https://facebook.github.io/react-native/docs/debugging), which is useful to know about when making changes. (On android devices, the debugger can be triggered using a command: `yarn android:debug`.)

## Run the App on the iOS Simulator

```bash
yarn ios
```


## Run the App on the Android Simulator

```bash
yarn android
```


## Run on a real device

See [Running On Device](https://facebook.github.io/react-native/docs/running-on-device). This is generally clunkier for development but is important for seeing the app the same way users do and it tends to run smoother than on an emulator.


## Separation of Concerns

```
assets/ # static assets like images, logos, fonts, etc
components/ # React UI components
containers/ # React containers which pass data and logic into components
sagas/ # Redux middleware library
helpers/ # reusable modules and business logic
navigation/ # Navigation logic
reducers/ # Redux reducers
App.js // entrypoint for the application
app.json // configuration for the application
```

## Core libraries & Docs

The following libraries are extensively used:

- [react-native](https://facebook.github.io/react-native/docs/components-and-apis.html)
- [react](https://reactjs.org): UI components
- [redux](https://redux.js.org/api/api-reference), [react-redux](https://react-redux.js.org/api/connect)
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html): validations for UI component inputs
