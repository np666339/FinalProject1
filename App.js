import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';
import Controller from './Images/Controller.png';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

function HomeScreen({ navigation }) {

  const [VGames, setVGames] = useState(0)

  return (
    
    <View style={styles.container}>
      <Text style={styles.header}>Catalog Entry</Text>
      <Text>  </Text>
      <TextInput
        style={styles.textPut}
        placeholder="Enter the List of Games"
        onChangeText={newText => setVGames(newText)}
        multiline={true}
      />
        <Text> </Text>
      <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Game Catalog', {VGames})}>
        <Text style={styles.buttonText}> View List </Text>
       </TouchableOpacity>
       <Text> </Text>
      <Button info style={styles.button}
        onPress={() => WebBrowser.openBrowserAsync('https://www.gamestop.com')}
      >
        <Text style={styles.buttonText}>Buy More Games!</Text>
        </Button>
       <Image source={Controller} />
    </View>
  );
}

function GameScreen({route, navigation}) {

  const { VGames } = route.params;
  return (
    <View style={styles.container2}>
      <Text style={styles.header}>Video Game List</Text>

      <Text style={styles.subhead}> Catalog: </Text>
      <Text></Text>
      <Text style={styles.games}> {VGames} </Text>
      <Text style={{paddingTop: 600}}>  </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Game Entry" component={HomeScreen} options={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'pink',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Game Catalog" component={GameScreen} options={{
          title: ' ',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'pink',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'left',
    justifyContent: 'center',
  },
  textPut: {
    backgroundColor: 'white',
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 100,
    borderWidth: 1
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'pink'
  },
  button: {
    borderRadius: 50,
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 45,
    paddingBottom: 20,
    alignSelf: 'center'
  },
  subhead: {
    fontWeight: 'bold',
    fontSize:30,
    paddingLeft: 5
  },
  games: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 35,
    paddingRight: 50
  }
  
})

export default App;