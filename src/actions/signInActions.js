export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAIL = 'GET_USER_FAIL';

export function getUser(email, password) {
    return (dispatch) => {
        dispatch({
            type: GET_USER_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'email': email,
                'password': password,
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            dispatch({
                type: GET_USER_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_USER_FAIL,
            })
        })
    }
}