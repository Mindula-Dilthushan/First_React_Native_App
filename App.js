import React, { Component } from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import ComponentClass from './components/ComponentClass'
import ComponentFunction from './components/ComponentsFunction'

const image = { uri: "https://reactjs.org/logo-og.png" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  IceBlue: {
    color: '#45aaf2'
  },

  LightBlueGreen: {
    color: '#55E6C1'
  },

  TextFamily: {
    fontFamily: "Times New Romen",
    fontSize: 35,
    fontWeight: "bold"
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});


export default class App extends Component{
  render(){
    return(
      <View style = 
      {{ alignItems: 'center', backgroundColor: ''}}
      // {styles.container}
      >

        {/* <ImageBackground source={image} style={styles.image}> */}


        <Text style={styles.TextFamily}>
            <Text style={styles.IceBlue}>Welcome React Native</Text>
        </Text>
        {/* </ImageBackground> */}
        <ComponentClass/>
        <ComponentFunction/>

      </View>
    )
  }
}



