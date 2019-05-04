import { GET_MAKEUP_REQUEST, GET_MAKEUP_SUCCESS, GET_MAKEUP_FAIL } from '../actions/makeupActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function makeupReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MAKEUP_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_MAKEUP_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_MAKEUP_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}