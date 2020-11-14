import React from 'react'
import {useDispatch} from 'react-redux'
import Layout from '../../components/Layouts'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
import {login} from '../../actions/'
const style = {
    marginTop: "50px"
}
export default function Signin() {
    const dispatch = useDispatch()
    const userLogin = (e)=>{
        e.preventDefault();
        const user = {
            email:"daipayanh@gmail.com",
            password:"123"
        }
        dispatch(login(user));
    }
    return (
        <div >

            <Layout>
                <Container >
                    <Row style = {style}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form onSubmit = {userLogin}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        Email is confidential
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
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
