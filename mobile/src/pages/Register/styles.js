import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }, 
    form:{
        alignSelf: 'stretch',
        marginTop: 30,
        marginLeft: 30,
        marginRight: 30
    },
    input:{
        borderWidth:1,
        borderRadius:4,
        height: 44,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderColor: '#ddd',
        color:'#444',
        fontSize: 16,
    },
    buttonRegister:{
        borderRadius: 4,
        backgroundColor: '#e02141',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:10
    },
    textRegister:{
        color: '#fff',
        fontWeight:'bold',
        fontSize: 16
    },
    buttonLogin:{
        borderWidth: 2,
        borderRadius: 4,
        borderColor:'#e02141',
        height: 42,
        justifyContent: 'center',
        alignItems:'center',
    },
    textLogin:{
        color:'#e02141',
        fontWeight:'bold',
        fontSize:16
    }
})