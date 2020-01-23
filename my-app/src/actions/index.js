import axios from 'axios';

export const GET_AMIIBO_START = 'GET_AMIIBO_START';
export const GET_AMIIBO_SUCCESS = 'GET_AMIIBO_SUCCESS';
export const GET_AMIIBO_FAIL = 'GET_AMIIBO_FAIL';

export const getAmiibo = () => dispatch => {
    dispatch({type: GET_AMIIBO_START});
    axios
    .get('https://www.amiiboapi.com/api/amiibo/')
    .then(res =>
        dispatch({type: GET_AMIIBO_SUCCESS, payload: res.data.results})    
    )
    .catch(err =>
        dispatch({type: GET_AMIIBO_FAIL, payload: err})
    )
};