import * as React from 'react';
import {Button,View,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function DetailsScreen (){
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Details Screen</Text>
        <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
<hr></hr>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
          <hr></hr>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  } 
export default DetailsScreen;