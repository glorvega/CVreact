import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import NewExperience from "../pages/NewExperience";
import CVen from "../CV/CVen.pdf";
import CVes from "../CV/CVes.pdf";
import Darkmode from "./Darkmode";

const NavbarTest = () => {
    //To see the darkMode
    const mode = useSelector((state) => state.darkModeObject);
    const isdarkMode = mode.isdarkMode;
    return(
       <>    
       <Navbar className={isdarkMode ? 'navDrk' : 'navBg'} variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" >My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link a href={CVen} download="English CV Gloria Vega">English CV</Nav.Link>
                <Nav.Link a href={CVes} download="CV Español Gloria Vega">Spanish CV</Nav.Link>
                <Nav.Link as={Link} className="newExperience" to="/newExperience">Add New Experience</Nav.Link>                              
            </Nav>
            <Routes>
                <Route path="/newExperience" element={<NewExperience/>} />
            </Routes>
            <Darkmode/>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
       </> 
    )
}
export default NavbarTest