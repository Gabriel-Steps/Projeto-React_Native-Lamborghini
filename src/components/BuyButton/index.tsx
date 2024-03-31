import React from 'react';
import { View,TouchableOpacity,Text } from 'react-native';
import {AntDesign} from "@expo/vector-icons"
import { styles } from './style';

export function BuyButton() {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button}>
            <AntDesign style={{marginRight: 10}} name="shoppingcart" size={24} color="black" />
            <Text style={styles.buttonText}>Buy This</Text>
        </TouchableOpacity>
    </View>
  );
}