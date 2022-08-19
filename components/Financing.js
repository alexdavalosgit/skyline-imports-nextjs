import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Financing({ setShowAlert }) {
  
    return (
        <Form className= "p-4">
            <div className="d-flex justify-content-center gap-2 align-items-center mb-4">
              <i className="fa-solid fa-coins fa-lg"></i>
              <h2 className="text-center fw-bold fs-3">Financing</h2>
            </div>
      
          <Row className="mb-3">
              
          <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="password" placeholder="Full Name" />
            </Form.Group>
            
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>
    
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>
    
            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>
    
          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="Sign me up for new listings" />
          </Form.Group>
    
          <Button 
           className="primary-btn custom-btn btn-lg"
           type="submit"
           onClick={() => setShowAlert(true)}>
            Submit
          </Button>
        </Form>
      );
}

export default Financing


