import { Container } from "react-bootstrap";
import Footer from "./Footer";
import NavbarComp from "./Navbar";
import styles from '../styles/Home.module.css'

const Layout = ({ children }) => {
    return ( 
        <div className="content">
                <NavbarComp/>
                { children }
                <Footer/>
             
        </div>
     );
}
 
export default Layout
;