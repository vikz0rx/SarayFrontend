import { GET_PHOTOGRAPH_REQUEST, GET_PHOTOGRAPH_SUCCESS, GET_PHOTOGRAPH_FAIL } from '../actions/photographActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function photographReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PHOTOGRAPH_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_PHOTOGRAPH_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_PHOTOGRAPH_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}