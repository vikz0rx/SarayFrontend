export const GET_RULES_REQUEST = 'GET_RULES_REQUEST';
export const GET_RULES_SUCCESS = 'GET_RULES_SUCCESS';
export const GET_RULES_FAIL = 'GET_RULES_FAIL';

export function getRules() {
    return (dispatch) => {
        dispatch({
            type: GET_RULES_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/rules/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_RULES_SUCCESS,
                payload: response[0].text,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_RULES_FAIL,
            })
        })
    }
}