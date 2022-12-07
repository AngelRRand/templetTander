import {
    GET_URLZIP
} from "../types";
export default (state, action) => {
    switch (action.type) {
        case GET_URLZIP:
            return {
                ...state,
                fileUrl: action.payload
            }
        default:
            return state
    }
}