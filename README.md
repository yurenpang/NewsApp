# NewsApp
This is the news event hybrid app for the [USCPFA-MN](http://uscpfa-mn.org) with React Native

## Prerequisites
In order to run this React Native app, you need to have: 

### Android
[Java SE Development Kits (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
[Node.js](https://nodejs.org/en/)
[Python2](https://www.python.org/downloads/)
[Android Studio](https://developer.android.com/studio/)

#### Windows
A better way to set up all environment is to use [Chocolatey](https://chocolatey.org/)

```
choco install -y nodejs.install python2 jdk8
```

#### MacOS

Use [Homebrew](https://brew.sh/)

```
brew install node
brew install watchman
```

#### Linux 
Follow the [node.js website](https://nodejs.org/en/download/package-manager/) to install node 8.3 or newer.

For a more complete setup, please visit [React Native](https://facebook.github.io/react-native/docs/getting-started.html)

## Installing
* Clone this repository in your local folder
* Open Node.js command prompt and direct to the local project folder
* Add `react-native-elements`, `react-native-vector-icons`, `striptags` libraries, type 

```
npm i react-native-elements --save
npm i --save react-native-vector-icons
react-native link react-native-vector-icons

npm install striptags
```

* Turn on your Android or iOS simulator or [Expo](https://expo.io/)
* In the node command prompt, type: 

 ```
 #For Android
 react-native run-android
 
 #For iOS
 react-native run-ios
 ```
 
 ##Built With
 * [React Native](https://facebook.github.io/react-native/)
 * [React](https://reactjs.org/)
 * JavaScript ES6
 * [WP REST API](http://v2.wp-api.org/) built in to the USCPFA-MN
 
 ##Acknowledgement
 * Thanks to [freeCodeCamp](https://medium.freecodecamp.org/create-a-news-app-using-react-native-ced249263627) for its tutorial
 * Thanks to React Native's online tutorial
 
