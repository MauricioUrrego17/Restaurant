import { SELECCIONAR_PRODUCTOS } from "../../types";

export default (state, action) => {

    switch(action.type){
        case SELECCIONAR_PRODUCTOS:
            return{
                ...state,
                platillo: action.payload
            }

        default:
            return state;
    }
}