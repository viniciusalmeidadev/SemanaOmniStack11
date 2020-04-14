import React, {useState} from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export default function MenuFooter() {

  const [colorIncidents, setColorIncidents] = useState('black');
  const [colorRecharge, setColorRecharge] = useState('#E02141');
  const [colorExtrato, setColorExtrato] = useState('#E02141');
  const [colorSettings, setColorSettings] = useState('#E02141');

    const navigation = useNavigation();

    function colorChange(option){
      if(option === 'incidents'){

        setColorIncidents('black');
        setColorRecharge('#E02141');
        setColorSettings('#E02141');
        setColorExtrato('#E02141');
 
        navigation.navigate('Incidents');

      }else if(option === 'recharge'){

        setColorIncidents('#E02141');
        setColorRecharge('black')
        setColorSettings('#E02141')
        setColorExtrato('#E02141')

        navigation.navigate('Recharge');

      }else if(option === 'extract'){

        setColorIncidents('#E02141');
        setColorRecharge('#E02141')
        setColorExtrato('black')
        setColorSettings('#E02141')

      }
      else if(option === 'settings'){

        setColorIncidents('#E02141');
        setColorRecharge('#E02141')
        setColorExtrato('#E02141')
        setColorSettings('black')
        
      }
    }
    

  return (
    <View style={styles.header}>
      <View style={styles.menuFooter}>
        <TouchableOpacity style={styles.button}  onPress={() => colorChange(option = 'incidents')}>
          <Feather name="heart" size={30}  color={colorIncidents} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => colorChange(option = 'recharge')}>
          <Feather name="dollar-sign" size={25}  color={colorRecharge}   />
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => colorChange(option = 'extract')}>
        <Feather name="file-text" size={25} color={colorExtrato}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => colorChange(option = 'settings')}>
        <Feather name="settings"  size={25} color={colorSettings} />
        </TouchableOpacity>
      </View>
    </View>
  );
}


