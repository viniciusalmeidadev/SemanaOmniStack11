import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, AsyncStorage } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './styles';

export default function MenuFooter() {

  const [colorIncidents, setColorIncidents] = useState('');
  const [colorRecharge, setColorRecharge] = useState('');
  const [colorExtrato, setColorExtrato] = useState('');
  const [colorSettings, setColorSettings] = useState('');
  const [optionColor, setOptionColor] = useState('');


  const route = useRoute();
  
  
  const navigation = useNavigation();


    useEffect(()=>{
      
      colorChange();

    },[optionColor])

   

    function colorChange(){
      if(optionColor === 'incidents'){

        setColorIncidents('black');
        setColorRecharge('#E02141');
        setColorSettings('#E02141');
        setColorExtrato('#E02141');

        
 
        navigation.navigate('Incidents');

      }else if(optionColor === 'recharge'){

        setColorIncidents('#E02141');
        setColorRecharge('black')
        setColorSettings('#E02141')
        setColorExtrato('#E02141')


        navigation.navigate('Recharge', {optionColor});

      }else if(optionColor === 'extract'){

        setColorIncidents('#E02141');
        setColorRecharge('#E02141')
        setColorExtrato('black')
        setColorSettings('#E02141')

      }
      else if(optionColor === 'settings'){

        setColorIncidents('#E02141');
        setColorRecharge('#E02141')
        setColorExtrato('#E02141')
        setColorSettings('black')
        
      }else{
        setColorIncidents('black');
        setColorRecharge('#E02141');
        setColorSettings('#E02141');
        setColorExtrato('#E02141');
      }
    }
    

  return (
    <View style={styles.header}>
      <View style={styles.menuFooter}>
        <TouchableOpacity style={styles.button}  onPress={() => setOptionColor('incidents')}>
          <Feather name="heart" size={30}  color={colorIncidents} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOptionColor('recharge')}>
          <Feather name="dollar-sign" size={25}  color={colorRecharge}   />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => setOptionColor('extract')}>
        <Feather name="file-text" size={25} color={colorExtrato}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setOptionColor('settings')}>
        <Feather name="settings"  size={25} color={colorSettings} />
        </TouchableOpacity>

        
      </View>
    </View>
  );
}


