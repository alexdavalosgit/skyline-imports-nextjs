import Link from 'next/link'
import { useEffect }from 'react'
import { useRouter } from 'next/router'
import  { Container } from 'react-bootstrap'

function NotFound() {
    const router = useRouter();

    // Redirect user to homepage after 3 seconds
    useEffect(() => {
      setTimeout(() => {
        router.push('/');
      }, 3000)
    }, [])
    

    return (
        <div className="full-screen d-flex justify-content-center align-items-center">
            <Container className="text-center">
                <h1>OOPS.</h1>
                <p>Sorry. We are having trouble locating this page.</p>
                <Link href="/">Go back to homepage</Link>

            </Container>
        </div>
    )
}

export default NotFound
