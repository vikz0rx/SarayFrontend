import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from '../actions/signInActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_USER_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_USER_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}