import { AppRegistry, UIManager } from 'react-native';
import App from './src/App.js';

// Need this in order for animations to work on android
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

AppRegistry.registerComponent('tech_stack', () => App);