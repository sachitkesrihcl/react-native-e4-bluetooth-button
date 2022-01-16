
# react-native-rn-e4-bluetooth-button

## Getting started

`$ npm install react-native-rn-e4-bluetooth-button --save`

### Mostly automatic installation

`$ react-native link react-native-rn-e4-bluetooth-button`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-rn-e4-bluetooth-button` and add `RNRnE4BluetoothButton.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNRnE4BluetoothButton.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNRnE4BluetoothButtonPackage;` to the imports at the top of the file
  - Add `new RNRnE4BluetoothButtonPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-rn-e4-bluetooth-button'
  	project(':react-native-rn-e4-bluetooth-button').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-rn-e4-bluetooth-button/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-rn-e4-bluetooth-button')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNRnE4BluetoothButton.sln` in `node_modules/react-native-rn-e4-bluetooth-button/windows/RNRnE4BluetoothButton.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Rn.E4.Bluetooth.Button.RNRnE4BluetoothButton;` to the usings at the top of the file
  - Add `new RNRnE4BluetoothButtonPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNRnE4BluetoothButton from 'react-native-rn-e4-bluetooth-button';

// TODO: What to do with the module?
RNRnE4BluetoothButton;
```
  