import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

export default function Settings() {
  const navigation = useNavigation();
  
  function logOut(){
    navigation.navigate('Login')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonLogout} onPress={logOut}>
        <Text style={styles.textLogout}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
