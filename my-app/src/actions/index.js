import axios from 'axios';

export const GET_COCKTAIL_START = 'GET_COCKTAIL_START';
export const GET_COCKTAIL_SUCCESS = 'GET_COCKTAIL_SUCCESS';
export const GET_COCKTAIL_FAIL = 'GET_COCKTAIL_FAIL';

export const getCocktail = () => dispatch => {
    dispatch({type: GET_COCKTAIL_START});
    axios
    .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => {
        console.log('get data', res.data.drinks[0])
        dispatch({type: GET_COCKTAIL_SUCCESS, payload: res.data.drinks[0]})
    })
    .catch(err =>
        dispatch({type: GET_COCKTAIL_FAIL, payload: err})
    )
};