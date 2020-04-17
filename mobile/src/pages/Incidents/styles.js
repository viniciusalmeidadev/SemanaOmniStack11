import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'; 

export default StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:'#ecf1f5'
    },

    header:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center'
    },

    headerText:{
        fontSize:15,
        color:'#737380',

    },
    
    headerTextBold:{
        fontWeight:'bold'
    },
    
    title:{
       fontSize: 20,
       marginBottom:10,
       marginTop:25,
       color:'#13131a',
       fontWeight:'bold' 
    },

    description:{
        fontSize:16,
        lineHeight:24,
        color:'#737380'
    },

    incidentList:{
        marginTop:25,
    },

    incident:{
        padding:24,
        borderRadius:8,
        backgroundColor:'#fff',
        marginBottom:16,
    },

    incidentProperty:{
        fontSize:14,
        color:'#41414d',
        fontWeight:'bold',
    },

    incidentValue:{
        fontSize:15,
        marginTop:8,
        marginBottom:12,
        color:'#737380'

    },

    detailsButton:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    detailsButtonText:{
        color:'#e02041',
        fontSize:15,
        fontWeight:'bold',
    },

    header:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-around',
        height:'10%',
        
    },
    menuFooter:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        width:'100%',
    },

});