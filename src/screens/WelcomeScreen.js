import * as React from 'react';
import { Button, View, Text } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome</Text>
      <hr></hr>
            <Button title="Go "
            onPress={() => navigation.navigate('Home')}  />
      <hr></hr>
            <Button title="Go to Details" 
            onPress={() => navigation.navigate('Details')} />
      <hr></hr>
            <Button title="Go to Notifications" 
            onPress={() => navigation.navigate('Notifications')} />
      <hr></hr>
              
    </View>
  );
}

export default WelcomeScreen;