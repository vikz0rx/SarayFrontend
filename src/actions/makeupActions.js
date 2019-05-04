export const GET_MAKEUP_REQUEST = 'GET_MAKEUP_REQUEST';
export const GET_MAKEUP_SUCCESS = 'GET_MAKEUP_SUCCESS';
export const GET_MAKEUP_FAIL = 'GET_MAKEUP_FAIL';

export function getMakeup(id) {
    return (dispatch) => {
        dispatch({
            type: GET_MAKEUP_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/makeup/' + id + '/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_MAKEUP_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_MAKEUP_FAIL,
            })
        })
    }
}