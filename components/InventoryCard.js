import { useState } from 'react'
import Data from '../data';
import InventoryCardInfo from '../components/InventoryCardInfo'
import { Container, Button, Card } from 'react-bootstrap'

function InventoryCard({ car }) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div className="card-container border text-center">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={car.image} />
        <Card.Body>
          <Card.Title className='fs-4 fw-normal'>{car.year}</Card.Title>
          <Card.Title className='fs-4 fw-normal'>{car.brand} {car.model}</Card.Title>
          <Card.Title className='fs-4 fw-bolder'>${car.price}</Card.Title>
          <Card.Text className='fs-6 fw-light'>
            A {car.condition} condition car with a {car.transmission} transmission and {car.mileage} miles on the odometer.
          </Card.Text>
          <Button className="primary-btn custom-btn" onClick={() => handleShow()}>More Info</Button>
        </Card.Body>
      </Card>

        <InventoryCardInfo show={show} handleClose={handleClose} car={car}/>
       </div>
    );
}

export default InventoryCard
