import React from 'react';
import { View, Text } from 'react-native';

import {useRoute} from '@react-navigation/native';

import styles from './styles';

//componentes
import MenuFooter from '../../component/Menu-Footer';

export default function Recharge() {

  const route = useRoute(); 

  const ola = route.params.optionColor;
  return (
    <>
    <View style={styles.container}>
        <Text>{ola}</Text>
    </View>

    <MenuFooter/>
    </>
  );
}
