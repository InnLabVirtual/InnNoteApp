import { createStackNavigator } from 'react-navigation-stack';


import Register from "../containers/Auth/Register/Register";
import Login from "../containers/Auth/Login/Login";

export default createStackNavigator (
    {
        Login: { screen: Login },
        Register: { screen: Register }
    },
    {
        initialRouteName: 'Register',
        headerMode: 'none'
    }
  );
  