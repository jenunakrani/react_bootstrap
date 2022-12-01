import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { IconName } from "react-icons/bs";
import Download from './Download';
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <header>
                <Navbar expand="lg" className='top_hed'>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={require('./img/arches-logo_108x108_(2).jpg')} className='logo_hed '></img>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto  backgroun" >
                                <NavDropdown title="Our Menu" id="basic-nav-dropdown" className='fw-bold'  >
                                    <div className='  w-300% menu  py-4'>
                                        <div className="menu_under_div">
                                            <NavDropdown.Item href="#action/3.1"><img src={require('./img/brgr1.jpg')} />Breakfast</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.2">
                                                <img src={require('./img/brgr2.jpg')} />Burgers</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.3"> <img src={require('./img/brgr3.jpg')} />Chicken & Fish Sandwiches</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.4"> <img src={require('./img/brgr4.jpg')} /> McNuggets® and Meals</NavDropdown.Item>
                                        </div>
                                        <div className="menu_under_div">
                                            <NavDropdown.Item href="#action/3.1"><img src={require('./img/brgr5.jpg')} />Fries® & Sides</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.2" >
                                                <img src={require('./img/brgr6.jpg')} />Happy Meal®</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.3"> <img src={require('./img/brgr7.jpg')} />McCafé® Coffees</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.4"> <img src={require('./img/brgr8.jpg')} /> McCafé® Bakery</NavDropdown.Item>


                                        </div>
                                        <div className="menu_under_div">
                                            <NavDropdown.Item href="#action/3.1"><img src={require('./img/brgr9.jpg')} />
                                                Sweets & Treats</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3"> <img src={require('./img/brgr10.jpg')} />
                                                Beverages</NavDropdown.Item>

                                            <NavDropdown.Item href="#action/3.4"> <img src={require('./img/brgr11.jpg')} />
                                                $1 $2 $3 Dollar Menu*</NavDropdown.Item>
                                        </div>
                                    </div>
                                    <p className='btn btn-outline-dark margin '>View Full Menu</p>
                                </NavDropdown>

                                
                                <Nav.Link href="#Download" className='fw-bold'>
                                    <Link to="/Download" className='page_link_teg'>DownlodApp</Link>
                                </Nav.Link>


                                <Nav.Link href="#Rewards" className='fw-bold'>
                                <Link to="/Rewards" className='page_link_teg'>MyMcDonald's Rewards</Link>
                                
                                </Nav.Link>
                                <Nav.Link href="#Exclusive" className='fw-bold'>
                                <Link to="/Exclusive" className='page_link_teg'>Exclusive Deals</Link>
                                </Nav.Link>
                                <Nav.Link href="#About" className='fw-bold'>
                                <Link to="/About" className='page_link_teg'>About Our Food</Link>
                                </Nav.Link>
                                
                                <Nav.Link href="#Locate" className='fw-bold'>
                                    <Link to="/Locate" className='page_link_teg'>Locate</Link>
                                </Nav.Link>
                                <Nav.Link href="#button" className='fw-bold'></Nav.Link>
                                <button className='top_btn ms-5'>Order Now</button>

                            </Nav>

                        </Navbar.Collapse>
                    </Container>
                    {/* <div className='top_hr_border'></div> */}
                </Navbar>


            </header><br /><br /><br /><br /><br /><br />
        </>
    )


}
export default Header


