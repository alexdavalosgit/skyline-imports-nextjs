import Inventory from "../../components/Inventory"
import { Container } from "react-bootstrap"

const Cars = () => {
    return (
      <div className="mt-5 text-center">
          
                  <h2>Our Inventory:</h2>
                  <p>Note: Please call ahead to ensure availability of vehicle.</p>
                  <Inventory/>
            
      </div>
      );
}
 
export default Cars;
