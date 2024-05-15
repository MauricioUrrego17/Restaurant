import { 
        GUARGAR_PEDIDO, 
        SELECCIONAR_PRODUCTOS,
        MOSTRAR_RESUMEN,
        ELIMINAR_PRODUCTO
        } from "../../types";

export default (state, action) => {

    switch(action.type){
        case SELECCIONAR_PRODUCTOS:
            return{
                ...state,
                platillo: action.payload
            }

        case GUARGAR_PEDIDO:
            return{
                ...state,
                pedido: [...state.pedido, action.payload]
            }

        case MOSTRAR_RESUMEN:
            return{
                ...state,
                total: action.payload
            }

        case ELIMINAR_PRODUCTO:
            return{
                ...state,
                pedido: state.pedido.filter(articulo => articulo.id !== action.payload)
            }

        default:
            return state;
    }
}