import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import {useRoute} from '@react-navigation/native';

import styles from './styles';



export default function Recharge() {

  const route = useRoute(); 

  
  return (
    <>
    <View style={styles.container}>
      <Text style={styles.titleRecharge}>Recargas</Text>
        <Text style={styles.textRecharge}>Selecione um valor abaixo</Text>

        <View style={styles.listRecharge}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(5)}</Text>
          
        </View>
        <View style={styles.listRecharge}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(20)}</Text>
        </View>
        <View style={styles.listRecharge}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(50)}</Text>
        </View>
        <View style={styles.listRecharge}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(100)}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={()=>{}}>
          <Text style={styles.textButton}>Concluir</Text>
        </TouchableOpacity>
    </View>

    
    </>
  );
}
