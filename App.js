import React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator } from 'react-navigation';
import SecondScreen from './src/screens/SecondScreen';
import FirstScreen from './src/screens/FirstScreen';
import Sidebar from './src/screens/Sidebar';
import DrawerButton from './src/components/DrawerButton';


const Tabs = TabNavigator({
    
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  
},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'First') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'Second') {
        iconName = `ios-list${focused ? '' : '-outline'}`;
      }
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})
export const Drawer = DrawerNavigator({
  Tabs: {
      screen: Tabs,
  }
},
{
  headerMode: 'none',
  navigationOptions: ({navigation}) => ({
    headerLeft: <DrawerButton navigation={navigation} />,
  }),
});

export const RootNav = StackNavigator({
  Dashboard : {
      screen: Drawer,
  },
}, {
    headerMode: 'screen', 
});
export default RootNav;