import React from 'react'
import Layout from '../../components/Layouts'
import { Jumbotron } from 'react-bootstrap'
const style = {
    margin: "5rem",
    backgroundColor: "#fff"
}
export default function Home() {
    return (
        <div>
            <Layout>
                <Jumbotron className='text-center' style={style}>
                    <h1>Welcome to Admin Dashboard</h1>
                    <p className="">I am Daipayan Hati of the Sikkim Manipal Institute of Technology. I am
                    currently in my 4th engineering of engineering. I apply for the position of web developer intern as I feel
                    I am comfortable working on the technologies mentioned. in the job description. I have been writing reactjs
                    application for a year now and I feel I can be a perfect intern for TrueCaller.I
                     also have experience in writing server-side code with NodeJS and express, and also have used  NEXTJS.</p>
                </Jumbotron>
            </Layout>

        </div>
    )
}
