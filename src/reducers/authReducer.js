import { authConstants } from "../actions/constants";

const intialState = {
    name:'neil'
}
export default function(state = intialState,action){
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            return state = {
                ...state,
                ...action.payload
            }
            break;
        default:
            return state
    }
}