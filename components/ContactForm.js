import React from 'react'
import {Form, Button, Container} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';



function ContactForm({ setShowAlert }) {
    return (
      <Container>
        <Form className="p-2">
          <div className="d-flex justify-content-center gap-1 align-items-center">
            <i className="fa-solid fa-phone fa-lg"></i> 
            <h2> Contact Us </h2>
          </div>
       

          <InputGroup className="mb-3 mt-3">
            <Form.Control
              placeholder="Recipient's Full Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email Address"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Phone Number"
              aria-label="Recipient's phonenumber"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Comment</InputGroup.Text>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>

          <Button 
           className="primary-btn custom-btn"
           type="submit"
           onClick={() => setShowAlert(true)}>
            Submit
          </Button>

        </Form>
      </Container>
        
      );
    
}

export default ContactForm



