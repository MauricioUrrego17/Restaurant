
import React from 'react';
import GlobalStyles from '../styles/globalStyles';
import { Container, Butto, Text, Button } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NuevaOrden = () => {
    const navigation = useNavigation();

    return(
        <Container style = {GlobalStyles.contenedor}>
            <View style = {[GlobalStyles.contenido, styles.contenidoView]}>
                <Button 
                    style = {GlobalStyles.button}
                    rounded={'full'}
                    onPress={() => navigation.navigate('Menu')}>
                    <Text style = {GlobalStyles.buttonText}>Crear una orden</Text>
                </Button>
            </View>
        </Container>
    );
}

const styles = StyleSheet.create({
    contenidoView: {
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default NuevaOrden;