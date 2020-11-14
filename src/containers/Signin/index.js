import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector} from 'react-redux'
import Layout from '../../components/Layouts'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { login, isUserLoggedin } from '../../actions/'
import {Redirect} from 'react-router-dom'
const style = {
    marginTop: "50px"
}
export default function Signin() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
   
    const auth = useSelector(state=>state.auth)
    const dispatch = useDispatch();
    useEffect(() => {
        
        dispatch(isUserLoggedin())
            
    }, [])
    const userLogin = (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        }
        dispatch(login(user)); 
    }
    if(auth.authenticate){
        return <Redirect to={`/`} />
    }
  
    return (
        <div >

            <Layout>
                <Container >
                    <Row style={style}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit={userLogin}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setemail(e.target.value)} />
                                    <Form.Text className="text-muted">
                                        Email is confidential
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>


                </Container>

            </Layout>

        </div>
    )
}
