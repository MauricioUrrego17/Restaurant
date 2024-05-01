import React, { useReducer } from "react";
import firebase from "../../firebaseDB";
import FirebaseContext from "./firebaseContext";
import FirebaseReducer from "./firebaseReducer";
import { OBTENER_PRODUCTOS_EXITO } from '../../types'
import _ from 'lodash'

const FirebaseState = props => {
    //Crear el estado inicial
    const inicialState = {
        menu:[]
    }

    //Definir el use reducer
    const [state, dispatch] = useReducer(FirebaseReducer, inicialState)

    //Consultar productos
    const obtenerProductos = () => {
        //Se hace consulta a firebase
        firebase.db
            .collection('productos')
            .onSnapshot(manejarSnapshot) //Para el manejo de la BD en real time

        function manejarSnapshot(snapshot){
            let plato = snapshot.docs.map(doc => {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });

            plato = _.sortBy(plato, 'categoriaScrollView')
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: plato
            });
        }
    }

    return(
        <FirebaseContext.Provider 
        value={{
            menu: state.menu,
            firebase,
            obtenerProductos
        }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )

}

export default FirebaseState