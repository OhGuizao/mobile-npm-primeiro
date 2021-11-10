import { StyleSheet } from "react-native";



export const estilo = StyleSheet.create({
    cabecalho : {
      backgroundColor:'black',
      paddingTop:30,
      paddingBottom:10
    },
  
    titulo :{
      color:'white',
      textAlign:'center',
      fontSize:30,
    },
    painel:{
        width:'100%',
        height:200,
        resizeMode:'cover'
    },
    menu:{
      width:176,
      height:150,
      resizeMode:'cover',
      margin:10
    },
    elmenu:{
      display:'flex',
      flexDirection:'row',
      flexWrap:'wrap'
    }
  })