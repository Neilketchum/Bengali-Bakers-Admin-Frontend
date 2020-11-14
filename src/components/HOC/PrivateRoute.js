import React, {  } from 'react'
import {Route,Redirect} from 'react-router-dom'

const PrivateRoute = ({component:Component,...rest})=>{
    return <Route {...rest} component = {(props)=>{
        const local_token = window.localStorage.getItem('token');
        if(local_token){
            return <Component {...props}/>
        }else{
            return <Redirect to = {'/signin'}/>
        }
    }}/>

}
export default PrivateRoute
