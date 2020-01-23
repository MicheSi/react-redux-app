import { GET_COCKTAIL_START, GET_COCKTAIL_SUCCESS, GET_COCKTAIL_FAIL } from "../actions";


const initialState = {
    isLoading: false,
    error: '',
    
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