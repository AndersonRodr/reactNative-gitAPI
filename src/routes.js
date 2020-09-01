import 'react-native-gesture-handler';
//import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main/'
import User from './pages/User/'

const Routes = createAppContainer(
    createStackNavigator({
        Main,
        User,
    },
    {
        headerLayoutPreset: 'center',
        headerBackTitleVisible: false,
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTintColor: 'white'
        }
    }
    )
);

export default Routes;