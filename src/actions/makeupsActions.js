export const GET_MAKEUPS_REQUEST = 'GET_MAKEUPS_REQUEST';
export const GET_MAKEUPS_SUCCESS = 'GET_MAKEUPS_SUCCESS';
export const GET_MAKEUPS_FAIL = 'GET_MAKEUPS_FAIL';

export function getMakeups() {
    return (dispatch) => {
        dispatch({
            type: GET_MAKEUPS_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/makeup/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_MAKEUPS_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_MAKEUPS_FAIL,
            })
        })
    }
}