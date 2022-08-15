import Link from 'next/link'
import React from 'react'
import  { Container } from 'react-bootstrap'

function NotFound() {
    return (
        <div className="mt-5">
            <Container className="text-center">
                <h1>OOPS.</h1>
                <p>Sorry. We are having trouble locating this page.</p>
                <Link href="/">Go back to homepage</Link>

            </Container>
        </div>
    )
}

export default NotFound
