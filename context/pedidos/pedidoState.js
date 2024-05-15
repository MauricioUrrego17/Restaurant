import React, { useReducer } from "react";
import firebase from "../../firebaseDB";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";
import { 
        SELECCIONAR_PRODUCTOS,
        GUARGAR_PEDIDO,
        MOSTRAR_RESUMEN,
        ELIMINAR_PRODUCTO
        } 
        from "../../types";

const PedidoState = props => {
    //Crear el estado inicial
    const inicialState = {
        pedido:[],
        platillo: null,
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

    //MOSTRAR LOS PEDIDOS
    const mostrarResumen = total => {
        dispatch({
            type: MOSTRAR_RESUMEN,
            payload: total
        })
    }

    //ELIMINAR ARTICULO
    const eliminarProducto = id => {
        dispatch({
            type: ELIMINAR_PRODUCTO,
            payload: id
        })
    }

    return(
        <PedidoContext.Provider 
        value={{
            pedido: state.pedido,
            platillo: state.platillo,
            total: state.total,
            seleccionarPlatillo,
            guardarPedido,
            mostrarResumen,
            eliminarProducto
        }}
        >
            {props.children}
        </PedidoContext.Provider>
    )

}

export default PedidoState