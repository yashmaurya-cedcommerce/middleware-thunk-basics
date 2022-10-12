import { FETCH_DATA } from "./types"

export const initialState = {
    users: []
}

const fetchReducer = (state = initialState, action)=> {
    switch(action.type) {
        case FETCH_DATA :
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default fetchReducer