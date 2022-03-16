import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomePage1 from './src/Screens/WelcomePages/WelcomePage1';
import WelcomePage2 from './src/Screens/WelcomePages/WelcomePage2';

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='WelcomePage1'
          screenOptions={{headerShown:false}}
        >
          <Stack.Screen name='WelcomePage1' component={WelcomePage1} />
          <Stack.Screen name='WelcomePage2' component={WelcomePage2} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#000"
  }
});