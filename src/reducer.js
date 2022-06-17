
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
    ADD_TO_FAVORITOS:"ADD_TO_FAVORITOS"

   
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case "ADD_TO_RESERVA":
            let itemInCart = state.reservas.find(item => item.id_libro === action.item.id_libro)
        return itemInCart ? {
            ...state,
            reservas: state.reservas.map(item=> 
                item.id_libro===action.item.id_libro
                ? {...item, quantity: item.quantity+1}
                :item)
        } :{
            ...state,
            reservas: [...state.reservas, {...action.item, quantity:1}],
            
        }
        case "ADD_TO_FAVORITOS":
            let itemInFavoritos = state.favoritos.find(item => item.id_libro === action.item.id_libro)
        return itemInFavoritos ? {
            ...state,
            favoritos: state.favoritos.map(item=> 
                item.id_libro===action.item.id_libro
                ? {...item, quantity: item.quantity+1}
                :item)
        } :{
            ...state,
            favoritos: [...state.favoritos, {...action.item, quantity:1}],
            
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
        default: return state;


    }

}

export default reducer