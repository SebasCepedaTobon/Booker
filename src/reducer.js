
export const initialState = {
    reservas: [],
    favoritos: [],
    capLibro:0


}

export const actionTypes = {
    ADD_TO_RESERVA: "ADD_TO_RESERVA",
    BORRAR_LIBRO: "BORRAR_LIBRO",
    DETALLES_LIBRO: "DETALLES_LIBRO",
    LIMPIAR_RESERVA:"LIMPIAR_RESERVA",
    ADD_TO_FAVORITOS: "ADD_TO_FAVORITOS"
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_RESERVA":
        return {
            ...state,
            reservas: [...state.reservas,action.item],
            
        }
        case "BORRAR_LIBRO":
        const index = state.reservas.findIndex((resrvaLibro => resrvaLibro.id_libro === action.id_libro))
        let NuevaReserva = [...state.reservas];
        if ( index >= 0){
            NuevaReserva.splice(index, 1)
        } else {console.log("removemos el producto")}
        return {
            ...state,
            reservas: NuevaReserva,


        };
        case "DETALLES_LIBRO":{
            return{
                ...state,
                capLibro: action.id_libro
            }
        }
        case "LIMPIAR_RESERVA":{
            return initialState
        
            
        }
        case "ADD_TO_FAVORITOS":
        
        return  {
            ...state,   
            favoritos: [...state.favoritos, action.item],
            
        }
        default: return state;


    }

}

export default reducer