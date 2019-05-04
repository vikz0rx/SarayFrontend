import { GET_STUFF_REQUEST, GET_STUFF_SUCCESS, GET_STUFF_FAIL } from '../actions/stuffActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function stuffReducer(state = initialState, action) {
    switch (action.type) {
        case GET_STUFF_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_STUFF_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_STUFF_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}