import React from 'react';
import { View } from 'react-native';

import { styles } from './style';

export function Divider() {
  return (
    <View style={styles.divideContainer}>
        <View style={styles.divider}></View>
    </View>
  );
}