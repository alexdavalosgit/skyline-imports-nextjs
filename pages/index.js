import styles from '../styles/Home.module.css'
import { Container, Button } from 'react-bootstrap';
import CarouselComp from '../components/CarouselComp';
import Information from '../components/Information';
import InformationPanel from '../components/InformationPanel';
import ContactForm from '../components/ContactForm';


export default function Home() {
  return (
    <>
    <CarouselComp/>  
    <Container fluid className='home mx-auto p-0 container-xxl'>
      <section className='section-1'>
        <Information/>
      </section>
      <InformationPanel/>
      <section className='section-2'>
       
      </section>
    </Container>
    </>
  )
}
