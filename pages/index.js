import styles from '../styles/Home.module.css'
import { Container, Button } from 'react-bootstrap';
import CarouselComp from '../components/CarouselComp';
import Information from '../components/Information';
import InformationPanel from '../components/InformationPanel';
import ContactForm from '../components/ContactForm';


export default function Home() {
  return (
    <>
    <section className="section-1">
      <CarouselComp/>  
      <Container fluid className='mx-auto p-0 container-xxl'>
        <Information/>
      </Container>
    </section>

    <section className="section-2">
        <InformationPanel/>
    </section>
    </>
  )
}
