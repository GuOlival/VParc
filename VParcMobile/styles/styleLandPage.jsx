import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
    textButton:{
      color:colors.branco,
      fontFamily:'Nunito_800ExtraBold',
      fontSize:20,
    },
    titulo:{
        alignText:'center',
        marginBottom:220,
        fontSize:45,
        fontFamily:'Nunito_800ExtraBold'
    },
    container: {
        flex:1,
        backgroundColor: colors.branco,
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'stretch',
        flexDirection:'column'
      },
      loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        marginTop: 30,
        justifyContent:'center'
      },
      conditions:{
        textDecorationLine:'underline',
        textDecorationColor:'black',
        marginTop:10
      }
});

export default styles;