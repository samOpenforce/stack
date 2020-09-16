import {Navigation} from 'react-native-navigation';
import {registerScreens} from './screens';
import {isLoggedIn} from '../auth';
registerScreens();
export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'HomeScreen',
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'SettingsScreen',
                },
              },
            ],
          },
        },
      ],
    },
  },
};

export const loginRoot = {
  root: {
    component: {
      name: 'LoginScreen',
    },
  },
};
export const start = () => {
  Navigation.events().registerAppLaunchedListener(async () => {
    Navigation.setRoot(isLoggedIn === false ? mainRoot : loginRoot);
  });
};

export const setRoot = (root) => {
  Navigation.setRoot(root);
};

export const pushScreen = (props, componentName) => {
  const {componentId} = props;
  Navigation.push(componentId, {
    component: {
      name: componentName,
    },
  });
};
