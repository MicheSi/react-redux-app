import { GET_COCKTAIL_START, GET_COCKTAIL_SUCCESS, GET_COCKTAIL_FAIL } from "../actions";


const initialState = {
    isLoading: false,
    error: '',
    strDrink: null,
    strDrinkThumb: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COCKTAIL_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case GET_COCKTAIL_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: '',
                strDrink: action.payload,
                strDrinkThumb: action.payload
            }
        case GET_COCKTAIL_FAIL:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}