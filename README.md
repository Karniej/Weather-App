## WeatherApp React Native

### Technology stack
| Technology     | Version          |
|----------------|------------------|
| React          | REACT_VERSION    |
| React Native   | REACT_NATIVE_VERSION          |

### Prerequisites
* [React Native](https://facebook.github.io/react-native/docs/getting-started.html)
* [Yarn](https://yarnpkg.com/en/docs/install)
* [node](https://github.com/creationix/nvm)

### Installation
1. Clone the repo:
```bash
$ git clone git@github.com:netguru/PROJECT_REPOSITORY_NAME.git
$ cd PROJECT_REPOSITORY_NAME
```

2. Install dependencies:
```bash
$ yarn
```

3. Install pods
```bash
$ cd ios && pod install && cd ..
```

4. Copy sample environment file:
```bash
$ cp .env.bitrise .env
```

Ask developers for credentials or copy them from 1password

### Running/Development
1. iOS:
```bash
$ react-native run-ios
```

2. Android:
```bash
$ react-native run-android
```

### Running Tests
```bash
$ yarn test
```

### Code structure
<!-- Provide any additional notes about code structure -->

### Code style
<!-- Provide any additional notes about code style -->

### Known issues
##### Packages with locked version
<!-- Provide packages with locked version with description why they're locked -->

##### Packages from GitHub
<!-- Provide packages with versions from github with description why -->

##### Code patches with patch-package
<!-- Provide packages with patches with desctiption what and why is patched -->

##### Hacks
<!-- Describe all hacky places in your code -->

##### Bugs
<!-- Describe all known bugs -->
