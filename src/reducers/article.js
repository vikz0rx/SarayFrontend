import { GET_ARTICLE_REQUEST, GET_ARTICLE_SUCCESS, GET_ARTICLE_FAIL } from '../actions/articleActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function articleReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_ARTICLE_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_ARTICLE_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}