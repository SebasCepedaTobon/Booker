
export const initialState = {
    reservas: []

}

export const actionTypes = {
    ADD_TO_RESERVA: "ADD_TO_RESERVA",
    BORRAR_LIBRO: "BORRAR_LIBRO",
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_RESERVA":
        return {
            ...state,
            reservas: [...state.reservas, action.item],
        
        };
        case "BORRAR_LIBRO":
        const index = state.reservas.findIndex((resrvaLibro => resrvaLibro.id === action.id))
        let NuevaReserva = [...state.reservas];
        if ( index >= 0){
            NuevaReserva.splice(index, 1)
        } else {console.log("removemos el producto")}
        return {
            ...state,
            reservas: NuevaReserva,


        };
        default: return state;


    }

}

export default reducer