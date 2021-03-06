import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, TextInput, AsyncStorage } from 'react-native';
import api from '../../services/api';

import {useRoute} from '@react-navigation/native';

import styles from './styles';



export default function Recharge() {

  const route = useRoute(); 

  const [value, setValue] = useState(0);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    clearValue();
  },[])
  
  function clearValue(){
    setValue(0);
  }
  async function makeRecharge(){
    try{
    if(value === 0){
      alert('selecione um valor')
    }else{
      setUsername(await AsyncStorage.getItem('userDonator'));
      await api.put('recharge', value, {
        headers:{
           'username': 'viniciusalmeida'
          }
    })
      setValue(0);
    }
    }catch(err){
      alert('algo deu errado')
      console.log(err)
    }
   
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.titleRecharge}>Recargas</Text>
        <Text style={styles.textRecharge}>Selecione um valor abaixo</Text>

        <TouchableOpacity style={styles.listRecharge} value={value} onPress={()=> setValue(5)}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(5)}</Text>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRecharge} value={value} onPress={()=> setValue(20)}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(20)}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRecharge} value={value} onPress={()=> setValue(50)}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(50)}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listRecharge} value={value} onPress={()=> setValue(100)}>
          <Text style={styles.textValue}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(100)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={makeRecharge}>
          <Text style={styles.textButton}>Concluir</Text>
        </TouchableOpacity>
    </View>

    
    </>
  );
}
