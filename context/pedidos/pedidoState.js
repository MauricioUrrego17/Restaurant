import React, { useReducer } from "react";
import firebase from "../../firebaseDB";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import { SELECCIONAR_PRODUCTOS,
        GUARGAR_PEDIDO } 
        from "../../types";

const PedidoState = props => {
    //Crear el estado inicial
    const inicialState = {
        pedido:[],
        platillo: null
    }

    //Definir el use reducer
    const [state, dispatch] = useReducer(PedidoReducer, inicialState)

    //SELECCIONAR EL PRODUCTO Y OBTENER EL PRODUCTO
    const seleccionarPlatillo = platillo => {
        dispatch({
            type: SELECCIONAR_PRODUCTOS,
            payload: platillo
        })
    } 

    const guardarPedido = pedido => {
        dispatch({
            type: GUARGAR_PEDIDO,
            payload: pedido
        })
    }

    return(
        <PedidoContext.Provider 
        value={{
            pedido: state.pedido,
            platillo: state.platillo,
            seleccionarPlatillo,
            guardarPedido
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )

}

export default PedidoState