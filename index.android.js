import React from 'react';
import { AppRegistry, Text, Button, View } from 'react-native';

const generateRandomNumber = () => {
  var result = Math.random();

  result = Math.floor(result * 10);

  alert(result);
}

const App = () => {
  return (
    <View>
      <Text>Random Number Generator</Text>
      <Button 
        title="Generate random number"
        onPress={ generateRandomNumber }
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App );