import { authConstants } from "../actions/constants";

const intialState = {
    token:null,
    user:{
        firstName:'',
        lastName:'',
        email:'',
        picture:'',
    },
  
        authenticate:false,
        authenticating:false,
    
   
}
export default function(state = intialState,action){
    console.log(action)
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
             state = {
                ...state,
                authenticating:true
            }
            break
        case authConstants.LOGIN_SUCCESS:
             state = {
                ...state,
                user:action.payload.user,
                token:action.payload.token,
                authenticate:true,
                authenticating:false
            }
        
            break;
        default:
            return state
    }
    return state
}