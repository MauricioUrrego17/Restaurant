
import React, { useEffect, useContext, useState} from 'react'
import { View,  Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Button, Text, TextInput, Card } from 'react-native-paper';
import PedidoContext from '../context/pedidos/pedidoContext';
import { Container, Box, HStack, FormControl } from 'native-base';

const FormularioPlato = () =>{

    const [cantidad, guardarCantidad] = useState(1);
    const [total, guardarTotal] = useState(0);

    //Uso del contexto
    const {platillo, guardarPedido} = useContext(PedidoContext);
    const {precio} = platillo

    const navigation = useNavigation();

    //Calcular el total a pagar
    const calcularTotal = () => {
        const totalPagar = precio * cantidad;
        guardarTotal(totalPagar)
    }

    const decrementar = () =>{
        if(cantidad > 1){
            const nuevaCantidad = parseInt(cantidad) - 1
            guardarCantidad(nuevaCantidad)
        }
    }

    const incrementar = () =>{
        const nuevaCantidad = parseInt(cantidad) + 1
        guardarCantidad(nuevaCantidad)
    }

    //Confirmo la orden
    const confirmarOrden =()=>{
        Alert.alert('¿Deseas confirmar lel pedido',
        'Un pedido confirmado, no se puede modificar',
        [{
            text: 'Confirmar',
            onPress: () => {
                //Almacenar el pedido al pedido principal
                const pedido ={
                    ...platillo,
                    cantidad,
                    total
                }

                guardarPedido(pedido)

                //Navegar hacia resumen
                navigation.navigate('ResumenPedido')
            }
            
        },
        {
            text: 'Cancelar'
            
            }
        ]
    )
    }

    useEffect(() => {
        calcularTotal()
    }, [cantidad]);

    return(
        <Container>
            <Box>
                <FormControl>
                    <Text>Cantidad</Text>
                    <HStack space={3}>
                        <Button 
                            props
                            dark
                            style = {{height:80, justifyContent:'center'}}
                            onPress={()=> decrementar()}
                        >-</Button>
                        <TextInput
                            style = {{textAlign:'center', fontSize:20}}
                            keyboardType='numeric'
                            onChangeText={ cantidad => guardarCantidad(cantidad)}
                        > {cantidad}</TextInput> 
                        <Button 
                            props
                            dark
                            style = {{height:80, justifyContent:'center'}}
                            onPress={()=> incrementar()}
                        >+</Button>
                    </HStack>
                    <Text> Total: $ { total } </Text>
                    <Box>
                        <HStack>
                            <Card>
                                <Card.Actions>
                                    <Button 
                                        onPress={() => confirmarOrden()}
                                    >
                                       <Text>Ordenar</Text>
                                    </Button>
                                </Card.Actions>
                            </Card>
                        </HStack>
                    </Box>
                </FormControl>
            </Box>
        </Container>
    )
}

export default FormularioPlato