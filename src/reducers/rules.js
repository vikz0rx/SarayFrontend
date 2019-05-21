import { GET_RULES_REQUEST, GET_RULES_SUCCESS, GET_RULES_FAIL } from '../actions/rulesActions';

const initialState = {
    body: '',
    isFetching: false,
    error: '',
}

export function rulesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RULES_REQUEST:
            return { ...state, isFetching: true, error: ''}

        case GET_RULES_SUCCESS:
            return { ...state, body: action.payload, isFetching: false, error: '' }

        case GET_RULES_FAIL:
            return { ...state, error: true, isFetching: false }

        default:
            return state
    }
}