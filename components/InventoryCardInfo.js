import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function InventoryCardInfo( { car, show, handleClose } ) {

  const title = `${car.year} ${car.brand} ${car.model}`
  const body = ` A ${car.condition} condition car with a ${car.transmission} transmission and ${car.mileage} miles on the odometer.`
  const odometer = `Mileage: ${car.mileage}`
  const exteriorColor = `Exterior Color: ${car.exteriorcolor}`
  const interiorColor = `Interior Color: ${car.interiorcolor}`
  return (

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Body>
          {odometer}  <br/>
          {exteriorColor} <br/>
          {interiorColor} <br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default InventoryCardInfo;