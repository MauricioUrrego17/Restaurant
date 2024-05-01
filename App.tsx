import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import NuevaOrden from './Screens/NuevaOrden';
import Menu from './Screens/Menu';
import DetallePlato from './Screens/DetallePlato';
import FormularioPlato from './Screens/FormularioPlato';
import ResumenPedido from './Screens/ResumenPedido';
import ProgresoPedido from './Screens/ProgresoPedido';

import FirebaseState from './context/firebase/firebaseState';
import PedidoState from './context/pedidos/pedidoState';
import { NativeBaseProvider } from 'native-base';
import firebase from './firebaseDB/index';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    const testDatabaseConnection = async () => {
      try {
        await firebase.db;
        console.log('Conexión a la base de datos exitosa');
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
      }
    };

    testDatabaseConnection();
  }, []);


  return (
    <NativeBaseProvider>
      <FirebaseState>
        <PedidoState>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#FFDA00'
                },
                headerTitleStyle: {
                  fontWeight: 'bold'
                }
              }}
            >
              <Stack.Screen name="NuevaOrden" component={NuevaOrden} options={{ title: 'Nueva Orden de pedido' }}></Stack.Screen>
              <Stack.Screen name="Menu" component={Menu} options={{ title: 'Menú' }}></Stack.Screen>
              <Stack.Screen name="DetallePlato" component={DetallePlato} options={{ title: 'Detalle del plato' }}></Stack.Screen>
              <Stack.Screen name="FormularioPlato" component={FormularioPlato} options={{ title: 'Formulario' }}></Stack.Screen>
              <Stack.Screen name="ResumenPedido" component={ResumenPedido} options={{ title: 'Resumen pedido' }}></Stack.Screen>
              <Stack.Screen name="ProgresoPedido" component={ProgresoPedido} options={{ title: 'Progreso pedido' }}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </PedidoState>
      </FirebaseState>
    </NativeBaseProvider>
  );
}

export default App