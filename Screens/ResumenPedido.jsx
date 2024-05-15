import React, { useContext, useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { Avatar, List, Button } from 'react-native-paper';
import { Container, Box, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import PedidoContext from '../context/pedidos/pedidoContext';
import firebase from '../firebaseDB';
import GlobalStyles from '../styles/globalStyles';

const ResumenPedido = () => {
    const { pedido, mostrarResumen, total, eliminarProducto } = useContext(PedidoContext);
    const navigation = useNavigation();
    const [totalPedido, setTotalPedido] = useState(0)

    useEffect(() => {
        calcularTotal()
    }, [pedido])

    const calcularTotal = () => {
        let nuevoTotal = pedido.reduce((total, articulo) => total + articulo.total, 0);
        setTotalPedido(nuevoTotal);
        mostrarResumen(nuevoTotal);
    };
    


    const eliminarArticulo = id => {
        Alert.alert('¿Deseas eliminar el articulo?',
        'Se va a eliminar un articulo',
        [{
            text: 'Confirmar',
            onPress: () => {
                //Eliminar del state el articulo
                eliminarProducto(id)
            }
        },
        {
            text: 'Cancelar'
            
            }
        ])
    }

    const enviarPedido = () => {
        Alert.alert('Enviar pedido',
        'Una vez enviado no se puede cambiar',
        [{
            text: 'Confirmar',
            onPress: async () => {
                //Crear un objeto con toda la informacion
                const pedidoObj = {
                    tiempoEntrega: 0,
                    estado: false,
                    creado: Date.now(),
                    orden: pedido
                }

                //Enviar a Firebase
                try{
                    const pedido = await firebase.db.collection('ordenes').add(pedidoObj)
                    console.log(pedido.id)
                    navigation.navigate('ProgresoPedido')

                } catch(error) {
                    console.log(error)
                }
            }    
        },
        {
            text: 'Cancelar'
        }
        ])
    }

    return (
        <Container>
            <Box>
                {pedido.map((platillo, i) => {
                    const { id, imagen, cantidad, nombre, precio } = platillo;
                    return (
                        <View key={id + 1}>
                            <Avatar.Image size={70} source={{ uri: imagen }} />
                            <Text style={GlobalStyles.texto}>{nombre}</Text>
                            <Text style={GlobalStyles.texto}>La cantidad es: {cantidad}</Text>
                            <Text style={GlobalStyles.texto}>El precio es: $ {precio * cantidad}</Text>
                            <Button
                                onPress={() => eliminarArticulo(id)}
                            >
                                <Text>Eliminar</Text>
                            </Button>
                        </View>
                    );
                })}

                <Text>El total del pedido es: {totalPedido}</Text>

                <Button         
                    onPress={() => enviarPedido()}
                >
                    <Text>Enviar Pedido</Text>
                </Button>

                <Button         
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text>Ir a menu</Text>
                </Button>
            </Box>
        </Container>
    );
};

export default ResumenPedido;
