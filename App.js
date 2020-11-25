import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Button , Image} from 'react-native';
export default function App() {
  return (

    <View style={styles.container}>

      <View>
        <Image source={require('./assets/main.svg')} style={{width: 200, height: 200}}/>
        <Text>Open up App.js to start working on your app!</Text>
        <Button title="Press Me"/>
      </View>
      <StatusBar style="auto" />
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29C17E',
    alignItems: 'center',
  },
  
});
