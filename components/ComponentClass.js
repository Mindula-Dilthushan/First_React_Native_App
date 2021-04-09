
import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';


const styles = StyleSheet.create({

    Rose: {
      color: '#ED4C67'
    }
    
});

export default class App extends Component{
    render(){
        return(
            <View>
                <Text style={styles.Rose}>This is a Component.</Text>
            </View>
        )
    }
}

