export const GET_STUFF_REQUEST = 'GET_STUFF_REQUEST';
export const GET_STUFF_SUCCESS = 'GET_STUFF_SUCCESS';
export const GET_STUFF_FAIL = 'GET_STUFF_FAIL';

export function getStuff() {
    return (dispatch) => {
        dispatch({
            type: GET_STUFF_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/stuff/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_STUFF_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_STUFF_FAIL,
            })
        })
    }
}