import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

export default function MenuFooter() {
  return (
    <View style={styles.header}>
        <TouchableOpacity><Text>S</Text></TouchableOpacity>
        <TouchableOpacity><Text>I</Text></TouchableOpacity>
        <TouchableOpacity><Text>R</Text></TouchableOpacity>
    </View>
  );
}
