export const GET_PHOTOGRAPH_REQUEST = 'GET_PHOTOGRAPH_REQUEST';
export const GET_PHOTOGRAPH_SUCCESS = 'GET_PHOTOGRAPH_SUCCESS';
export const GET_PHOTOGRAPH_FAIL = 'GET_PHOTOGRAPH_FAIL';

export function getPhotograph(id) {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOGRAPH_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/photographs/' + id + '/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_PHOTOGRAPH_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_PHOTOGRAPH_FAIL,
            })
        })
    }
}