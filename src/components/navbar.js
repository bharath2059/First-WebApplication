import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from '../pages/about';
import Services from '../pages/service';
import Tools from '../pages/tools';
import Home from '../pages/Home';
import '../styles/mystyles.css';

import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

function NavBar() {
    return (
    <BrowserRouter>
      
     <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="">BHARATH MAMIDI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
        
         <div className='nav_text'>              
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Tools">Tools</Nav.Link>
                            </Nav>
         </div> 
        </Navbar.Collapse>
                     
      </Container>
      </Navbar>
      
       <Routes>
          <Route index element={<Home />} />
          <Route path='Services' element={<Services />} />
          <Route path='Tools' element={<Tools />} />
          <Route path = 'About' element = {<About />} />
        </Routes>
     </BrowserRouter>

  );
}



export default NavBar;