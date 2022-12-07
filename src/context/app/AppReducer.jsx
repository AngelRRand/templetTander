import {
    GET_USER_EMAIL,
    GET_ZIPS_NAMES,
    GET_ZIP_URL,
} from "../types";
export default (state, action) => {
    switch (action.type) {

        case GET_USER_EMAIL:
            return {
                ...state,
                userMail: action.payload
            }
        case GET_ZIPS_NAMES:
            return {
                ...state,
                zipsNames: action.payload
            }
        case GET_ZIP_URL:
            return {
                ...state,
                urlsZips: action.payload
            }

        default:
            return state
    }
}