import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Navbar, Nav,FormControl } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { FaShoppingCart } from "react-icons/fa";

function App() {
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mynavbar">
        <Navbar.Brand href="#home">Shop-Villa</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
          
          </Nav>
          <Nav className="justify-content-center" activeKey="/home">
            <div className="center-container">
               <div>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </div>
              <div className="nav-items">
              <Nav.Item>
                <Nav.Link href="/home">Electronics</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Mobiles</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Men's Fashion</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-3">
                    Women's Fashion
                </Nav.Link>                  
                </Nav.Item>
               
              </div>
            </div>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><FaShoppingCart/> My Cart</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <Carousel className="car">
        <Carousel.Item>
           <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/Dec_BAU/29Dec/Rv1/P38983965_IN_WLME_SamsungGalaxy_M51_Christmas_1500x600_1._CB412654713_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/Dec_BAU/29Dec/Rv1/V259540125_IN_WLME_SamsungM31Prime_DesktopTallHero_3000x1200_2._CB412655021_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/Dec_BAU/29Dec/Rv1/P38983965_IN_WLME_SamsungGalaxy_M51_Christmas_1500x600_1._CB412654713_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
    )
}

export default App;
