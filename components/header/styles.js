import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:50,
        zIndex:300,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:28,
    },
    logo:{
        height:20,
        width:100,
        resizeMode:'contain',
    },
    menu:{
        width:25,
        height:25,
        resizeMode:'contain',
    },
    
});

export default styles;