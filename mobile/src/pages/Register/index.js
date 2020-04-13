import React, {useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, AsyncStorage, Keyboard } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Register() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    async function handleSubmit(){
        try{
        await api.post('/users', {
            name, username, email, password
        })
        alert('registro efetuado com sucesso, parabéns! ')
        navigation.navigate('Incidents');
        }catch(err){
            alert('erro ao fazer o registro!')
        }
    }

    function handleLogin(){
        navigation.navigate('Login');
    }

  return (
    <View style={styles.container}>
        <Image source={logoImg}/>
        <View style={styles.form}>
        <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
        />
        <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            placeholderTextColor="#999"
            value={username}
            onChangeText={setUsername}
            autoCorrect={false}
        />
        <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCorrect={false}
            keyboardType="email-address"
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
        />

        <TouchableOpacity onPress={handleSubmit} style={styles.buttonRegister}>
            <Text style={styles.textRegister}>Registrar-se</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} style={styles.buttonLogin}>
            <Text style={styles.textLogin}>Voltar</Text>
        </TouchableOpacity>
        </View>
    </View>
  );
}
