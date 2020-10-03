import React from 'react'
import Header from '../Header/index'
import { Container } from 'react-bootstrap'

export default function Layout(props) {
    return (
        <div>
            <Header></Header> 
         
                {props.children}
            
        </div>
    )
}
