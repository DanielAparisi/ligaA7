import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button, TouchableHighlight } from 'react-native';

import icon from './assets/icon.png'


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
        <TouchableHighlight
          underlayColor={"#09f"}
          onPress={() => (alert('Hola'))} 
          style={{color : "red",width:150,height:100, borderRadius :10, backgroundColor:"green", justifyContent:'center', alignItems:'center'}}    
        >
           <Text style={{color :'#fff'}}>Bienvenid@ a liga A+7</Text>
        </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
