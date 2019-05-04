import { GET_MAKEUPS_REQUEST, GET_MAKEUPS_SUCCESS, GET_MAKEUPS_FAIL } from '../actions/makeupsActions';

const initialState = {
    list: [],
    isFetching: false,
    error: '',
}

export function makeupsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MAKEUPS_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_MAKEUPS_SUCCESS:
            return { ...state, list: action.payload, isFetching: false, error: '' }

        case GET_MAKEUPS_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}