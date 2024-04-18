/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

// AppRegistry.registerHeadlessTask("SomeTask", () => require('./src/alarm'));
AppRegistry.registerComponent(appName, () => App);
