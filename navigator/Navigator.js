import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  CarScreen,
  ChatScreen,
  HomeScreen,
  MapScreen,
  PersonScreen,
  SettingScreen,
} from '../screens';

const BottomTab = createMaterialBottomTabNavigator();

export class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="ChatScreen"
          activeColor="#ffff"
          inactiveColor="#E0E0E0"
          shifting={true}
          labeled={true}
          screenOptions={{headerShown: false, header: () => <Text>Test</Text>}}>
          <BottomTab.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              title: 'test',
              tabBarLabel: 'Home',
              tabBarColor: '#FF8000',
              tabBarIcon: ({color}) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: 'Map',
              tabBarColor: '#FF8000',
              tabBarIcon: ({color}) => (
                <Icon name="map-marker-multiple" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="CarScreen"
            component={CarScreen}
            options={{
              tabBarLabel: 'Car',
              tabBarColor: '#FF8000',
              tabBarIcon: ({color}) => (
                <Icon name="car" color={color} size={27} />
              ),
            }}
          />
          <BottomTab.Screen
            name="PersonScreen"
            component={PersonScreen}
            options={{
              tabBarLabel: 'Person',
              tabBarColor: '#FF8000',
              tabBarIcon: ({color}) => (
                <Icon name="account-circle-outline" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{
              tabBarLabel: 'Setting',
              tabBarColor: '#FF8000',
              tabBarIcon: ({color}) => (
                <Icon name="cog-outline" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigator;
