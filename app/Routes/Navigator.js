import Screen1 from '../screen/Screen1';
import Main from '../components/Main';
import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({

    Layar1: {
        screen: Screen1,
        navigationOptions: {
            header: null
        }
    },
    Layar2: {
        screen: Main,
        navigationOptions: {
            header: null
        }
    }
})