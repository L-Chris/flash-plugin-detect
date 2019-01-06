# flash-plugin-detect
Detects the presence and version of the Shockwave Flash plugin in web browser

## Install
```javascript
yarn add flash-plugin-detect
```

## Usage
It will always return a number:
- If the Flash Player plugin is installed, a number denoting the major and minor version is returned, e.g. 9.125 or 11.8
- If no Flash Player is installed, -1
```javascript
import getFlashVersion from 'flash-plugin-detect'

getFlashVersion()
```