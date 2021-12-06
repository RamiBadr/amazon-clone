export const initState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }

        case "REMOVE_FROM_BASKET":
            const basket = state.basket;
            const productIndex = basket.findIndex(product => product.id === action.id);
            if(productIndex > -1) basket.splice(productIndex, 1);
            return {...state, basket: basket};

        case "SET_USER":
            return {...state, user: action.user}

        default:
            return state;
    }
}

export default reducer

