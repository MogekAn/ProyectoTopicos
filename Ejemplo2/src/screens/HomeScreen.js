import * as React from 'react';
import {Button,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen ({navigation}){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <hr></hr>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <hr></hr>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
              <hr></hr>
            <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

export default HomeScreen;