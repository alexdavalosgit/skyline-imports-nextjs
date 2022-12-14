import { useState } from 'react';
import {Container, Figure, Form } from 'react-bootstrap';
import AlertComp from '../components/AlertComp';
import ContactForm from '../components/ContactForm';

function About() {
    const [showAlert, setShowAlert] = useState(false);

  return (
         <div className='mx-auto'>
            <section className="header-section p-5">
              <Container>
              <h3 className="text-uppercase text-center fw-bold fs-1 m-5">About Us</h3>
              <div className="p-2 mb-3">
                <p>Skyline Imports is the number one destination to find your next classic car. Currently, we are specialized in JDM vehicles, but have plans to expand our categories in the future.</p>
                <p>We are here for all of your requests! Be sure to fill out our contact form below for any inquiries on vehicles or general questions!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, reprehenderit, praesentium veniam, sed incidunt velit tempora dignissimos eligendi quas ipsum quibusdam! Architecto repudiandae amet eum! Voluptas provident facilis impedit eligendi!</p>
              </div>
              <Figure className="position-relative mt-3">
                <img src="https://images.unsplash.com/photo-1621808752171-531c30903889?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                    className="img-fluid"/>
                <figcaption className="text-white">
                  <h2 className='fw-bold fs-1'>Let&apos;s find your dream car.</h2>
                </figcaption>
              </Figure>
              </Container>
            </section>
            <section className='secondary-section p-5'>
              <AlertComp
              showAlert = {showAlert} 
              />
              <ContactForm setShowAlert={setShowAlert}/>
            </section>
          </div>
   
  )
    
}

export default About