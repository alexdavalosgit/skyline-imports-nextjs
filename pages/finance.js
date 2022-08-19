import { useState } from 'react';
import {Container, Figure } from 'react-bootstrap';
import AlertComp from '../components/AlertComp';
import Financing from '../components/Financing';

function Finance() {
    const [showAlert, setShowAlert] = useState(false);

  return (
         <div className='mx-auto'>
            <section className='header-section p-5'>
              <Container>
              <h1 className="text-uppercase text-center fw-bold fs-1">Finance With Skyline Imports</h1>
              <div className="p-2 mb-3">
                <p>When it comes to financing, let Skyline Imports take care of it for you. We are partnered with Navy Federal Credit Union, to bring you the best possible rate on the market. Inquire about financing with our form below!</p>
                <p>Applicant should have 600 minimum credit score with two years prior loan history or a strong co-signer. Loans are intended for vehicles to be kept as collector cars. Will not finance a vehicle intended for daily driving purposes.</p>
              </div>
              <Figure className="position-relative mt-3">
                <img src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    className="img-fluid"/>
                <figcaption>
                  <h2 className='fw-bold fs-1'>Financing Made Easy.</h2>
                </figcaption>
              </Figure>
              </Container>
            </section>
            <section className='secondary-section p-5'>
              <AlertComp
              showAlert = {showAlert} 
              />
              <Financing 
              setShowAlert= {setShowAlert}
              />
            </section>
           
           
          </div>
   
  )
    
}

export default Finance