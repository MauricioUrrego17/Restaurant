import { StyleSheet } from 'react-native'

const GlobalStyles = StyleSheet.create({
    contenedor:{
        flex: 1,
    },

    contenido: {
        marginHorizontal: '2.5%',
        flex: 1
    },

    button: {
        backgroundColor: 'blue'
    },

    buttonText: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'black'
    },

    texto: {
        color: 'black', 
        fontSize: 18,  
  
    }
});

export default GlobalStyles;