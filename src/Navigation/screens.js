import {Navigation} from 'react-native-navigation';
import HomeScreen from '../Screens/Home';
import SettingsScreen from '../Screens/Settings';
import LoginScreen from '../Screens/Login';

export function registerScreens() {
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
  Navigation.registerComponent('HomeScreen', () => HomeScreen);
  Navigation.registerComponent('SettingsScreen', () => SettingsScreen);
}
