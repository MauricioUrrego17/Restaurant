import { GUARGAR_PEDIDO, SELECCIONAR_PRODUCTOS } from "../../types";

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
                pedido: action.payload
            }

        default:
            return state;
    }
}