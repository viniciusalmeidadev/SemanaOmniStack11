import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from  './styles';


export default function Login() {

    const [uName, setUName]=useState("");
    const [userPass, setUserPass]=useState("");

    const navigation = useNavigation();

    
    async function handleSubmit(){
        try{
         await api.post('/sessions/user', {
            uName, userPass
        })

        await AsyncStorage.setItem('username', uName);
        setUName("");
        setUserPass("");    
        navigation.navigate('Incidents');
        }catch(err){
            alert('Dados incorretos');
        }
        
    }

  return (
    <View style={styles.container}>
       
        <Image source={logoImg}/>

        <View style={styles.form}>

        <TextInput
            placeholder="Username ou E-mail"
            placeholderTextColor="#999"
            
            autoCorrect={false}
            style={styles.input}
            value={uName}
            onChangeText={setUName}
            />

        <TextInput
            placeholder="Senha"
            placeholderTextColor="#999"
            
            autoCorrect={false}
            style={styles.input}
            value={userPass}
            onChangeText={setUserPass}
            />

        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>

        
        <Text style={styles.buttonRegister}>Criar Conta</Text>
        
        
    </View>
  );
}
