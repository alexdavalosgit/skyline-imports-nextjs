import styles from '../styles/Home.module.css'
import { Container, Button } from 'react-bootstrap';
import CarouselComp from '../components/CarouselComp';
import Information from '../components/Information';
import InformationPanel from '../components/InformationPanel';


export default function Home() {
  return (
    <div>
      <header>
        <CarouselComp/>  
      </header>
      <section className='section-1'>
        <Information/>
      </section>
      <InformationPanel/>
      <section className='section-2'>
        <h4>Contact us today</h4>
      </section>
     
    </div>
  )
}
