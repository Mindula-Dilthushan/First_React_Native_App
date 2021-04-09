// short code : rnf

import React from 'react';
import {StyleSheet, View, Text, Button, TextInput, Image} from 'react-native';

const styles = StyleSheet.create({

    Yellow: {
      color: '#fed330'
    }
    
});

export default function ComponentFunction(){
    return(
        <View>
            <Text style={styles.Yellow}>This is a Component Function</Text>
            <Button title = "Get Start"/>

            <TextInput placeholder="Enter Your Email"/>

            <Image 
                source={require('../assets/icon/Alpha.jpg')}
                style={{width:200, height:200}}
            />

        </View>

    )
}