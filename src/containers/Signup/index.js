import React from 'react'
import Layout from '../../components/Layouts'
import { Form, Button, Container, Row, Col } from "react-bootstrap"
const style = {
    marginTop: "50px"
}
export default function Singnup() {
    return (
        <div>
            <Layout>
                <Container >
                    <Row style = {style}>
                        <Col md={{ span: 6, offset: 3 }}>
                            <Form>
                                <Row>
                                    <Col md  = {6}>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col md = {6}>
                                    <Form.Label>Email address</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                                <br></br>
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
