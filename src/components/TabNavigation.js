import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Home';
import Categories from'./Categories';

const Tab=createMaterialBottomTabNavigator();

const MyTabs =()=> {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'tomato' }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Categories"
          component={Categories}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
        }

        export default MyTabs