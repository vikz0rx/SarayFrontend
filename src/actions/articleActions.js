export const GET_ARTICLE_REQUEST = 'GET_ARTICLE_REQUEST';
export const GET_ARTICLE_SUCCESS = 'GET_ARTICLE_SUCCESS';
export const GET_ARTICLE_FAIL = 'GET_ARTICLE_FAIL';

export function getArticle(id) {
    return (dispatch) => {
        dispatch({
            type: GET_ARTICLE_REQUEST,
        })

        fetch('http://138.197.173.132:8000/api/v0/news/' + id + '/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then(response => response.json())
        .then(response => {
            dispatch({
                type: GET_ARTICLE_SUCCESS,
                payload: response,
            })
        })
        .catch(error => {
            alert(error.message)
            dispatch({
                type: GET_ARTICLE_FAIL,
            })
        })
    }
}