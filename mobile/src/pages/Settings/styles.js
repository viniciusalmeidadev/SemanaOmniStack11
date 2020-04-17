import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 

export default StyleSheet.create({

container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#ecf1f5'
},
buttonLogout:{
    borderRadius:4,
    width:60,
    backgroundColor:'#e02141',
    height:30
},
textLogout:{
    color:'#fff',
    marginTop:5,
    marginLeft:5
}
})