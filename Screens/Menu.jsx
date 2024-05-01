import React, { useEffect, useContext, Fragment } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import { useNavigation } from '@react-navigation/native';
import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidoContext';
import { NativeBaseProvider, Avatar, List } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const Menu = () => {
    const navigation = useNavigation();
    const { menu, obtenerProductos } = useContext(FirebaseContext);
    const { seleccionarPlatillo } = useContext(PedidoContext);

    useEffect(() => {
        obtenerProductos();
    }, []);

    const mostrarHeading = (categoria, i) => {
        if (i > 0) {
            const categoriaAnterior = menu[i - 1].categoria;
            if (categoriaAnterior !== categoria) {
                return (
                    <View key={categoria}>
                        <Text style={GlobalStyles.texto}>{categoria}</Text>
                    </View>
                );
            }
        }
        return null
    }

    return (
        <NativeBaseProvider>
            <ScrollView>
                <View>
                    {menu.map((platillo, i) => {
                        const { imagen, nombre, descripcion, categoria, id, precio } = platillo
                        return (
                            <Fragment key={id}>
                                {mostrarHeading(categoria, i)}
                                <TouchableOpacity
                                    style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
                                    onPress={() => {
                                        seleccionarPlatillo(platillo);
                                        navigation.navigate("DetallePlato", { platillo }); // Pasar platillo como parámetro
                                    }}
                                >
                                    <Avatar size="70px" source={{ uri: imagen }} />
                                    <List.Item
                                        title={nombre}
                                        description={descripcion}
                                    >
                                        <Text style={GlobalStyles.texto}>{nombre}</Text>
                                    </List.Item>
                                </TouchableOpacity>
                            </Fragment>
                        )
                    })}
                </View>
            </ScrollView>
        </NativeBaseProvider>
    )
};

export default Menu;
