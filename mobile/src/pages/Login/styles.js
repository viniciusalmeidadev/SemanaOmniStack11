import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    form:{
        alignSelf: 'stretch',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30
    },
    input:{
        borderWidth:1,
        borderColor: '#ddd',
        marginBottom: 20,
        fontSize: 16,
        paddingHorizontal: 20,
        height: 44,
        color:'#444',
        borderRadius: 4
    },
    button:{
        borderRadius: 4,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e02141'
    },
    buttonText:{
        fontSize: 16,
        color: '#fff',
        fontWeight:'bold'
    },
    viewRegister:{
        width: '100%',
        borderWidth:1
    }
    ,
    buttonRegister:{
        color: '#e02141',
        alignSelf: 'center',
        fontSize: 16,
        marginTop: 10
    }

})