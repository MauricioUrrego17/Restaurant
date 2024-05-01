
import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyles from '../styles/globalStyles';
import { NativeBaseProvider, Avatar, List } from 'native-base';

const DetallePlato = ({ route }) => {
    const { platillo } = route.params; // Obtener el platillo de los parámetros de navegación

    return (
        <View>
            <Avatar size="70px" source={{ uri: platillo.imagen }} />
            <Text style={GlobalStyles.texto}>Nombre: {platillo.nombre}</Text>
            <Text style={GlobalStyles.texto}>Descripción: {platillo.descripcion}</Text>
            <Text style={GlobalStyles.texto}>Categoría: {platillo.categoria}</Text>
            <Text style={GlobalStyles.texto}>Precio: {platillo.precio}</Text>
        </View>
    );
}   

export default DetallePlato;
