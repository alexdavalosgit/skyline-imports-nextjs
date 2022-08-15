import Inventory from "../../components/Inventory"
import { Container } from "react-bootstrap"

const Cars = () => {
    return (
      <div>
            <Container className="mt-5 text-center">
                  <h2>Our Inventory:</h2>
                  <p>Note: Please call ahead to ensure availability of vehicle.</p>
                  <Inventory/>
            </Container>
      </div>
      );
}
 
export default Cars;
