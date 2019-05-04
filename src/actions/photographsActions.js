export const GET_PHOTOGRAPHS_REQUEST = 'GET_PHOTOGRAPHS_REQUEST';
export const GET_PHOTOGRAPHS_SUCCESS = 'GET_PHOTOGRAPHS_SUCCESS';
export const GET_PHOTOGRAPHS_FAIL = 'GET_PHOTOGRAPHS_FAIL';

export function getPhotographs() {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOGRAPHS_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/photographs/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_PHOTOGRAPHS_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_PHOTOGRAPHS_FAIL,
            })
        })
    }
}