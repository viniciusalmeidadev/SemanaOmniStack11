import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 

export default StyleSheet.create({

container:{
    flex:1,
    paddingHorizontal:24,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor:'#ecf1f5'
},
titleRecharge:{
    fontSize:20,
    fontWeight:'bold'
},
textRecharge:{
    marginBottom:10
},
listRecharge:{
    
    borderRadius:4,
    height:80,
    width: '50%',
    justifyContent:'space-around',
    
    marginLeft:'25%',
    marginBottom:10,
    backgroundColor:'#fff'
},
textValue:{
   marginLeft: '31%'
},
button:{
    backgroundColor:'#e02141',
    height:42,
    width:'50%',
    marginLeft:'25%',
    borderRadius:4,
    justifyContent:'center',
    alignContent:'center'
},
textButton:{
    color:'#fff',
    fontSize:16,
    marginLeft:'31%'
}
})
