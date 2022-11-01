import React from 'react';
import {SafeAreaView,Text,View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './src/components/TabNavigation';

const App = () =>{
return(
  <NavigationContainer>
<MyTabs/>
  </NavigationContainer>

);
};
export default App;

