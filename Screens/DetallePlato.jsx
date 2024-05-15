
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/globalStyles';
import { NativeBaseProvider, Avatar, List, Button } from 'native-base';
import PedidoContext from '../context/pedidos/pedidoContext';
import { Box, Container, HStack} from 'native-base'
import { Card } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

const DetallePlato = () => {
    const { platillo } = useContext(PedidoContext)
    const { imagen, nombre, descripcion, categoria, id, precio } = platillo
    const navigate = useNavigation()

    return (
        <Box style = {GlobalStyles.contenedor}>
            <Card>
                <Card.Cover source={{ uri:imagen}}></Card.Cover>
                <Card.Content>
                    <Text style= {GlobalStyles.texto}>{nombre}</Text>
                    <Text style= {GlobalStyles.texto}>La categoria es: {categoria}</Text>
                    <Text style= {GlobalStyles.texto}>{descripcion}</Text>
                    <Text style= {GlobalStyles.texto}>{precio}</Text>
                </Card.Content>
                <Card.Actions>
                    <Button
                        onPress={() => navigate.navigate('FormularioPlato')}
                    >
                        <Text>Ordenar</Text>
                    </Button>
                </Card.Actions>
            </Card>
        </Box>
    );
}   

export default DetallePlato;
