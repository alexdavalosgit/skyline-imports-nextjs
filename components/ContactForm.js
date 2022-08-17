import React from 'react'
import {Form, Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';


function ContactForm({ setShowAlert }) {
    return (
        <Form className="border mt-5 p-4">
          <h2 className="text-center"> Contact Us </h2>


          <InputGroup className="mb-3">
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
           variant="dark"
           type="submit"
           onClick={() => setShowAlert(true)}>
            Submit
          </Button>

        </Form>
      );
    
}

export default ContactForm



