export const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
export const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
export const GET_NEWS_FAIL = 'GET_NEWS_FAIL';

export function getNews() {
    return (dispatch) => {
        dispatch({
            type: GET_NEWS_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/news/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_NEWS_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_NEWS_FAIL,
            })
        })
    }
}