
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsClock, BsPlayBtnFill, BsTwitter, BsFacebook, BsPinterest, BsGeoAltFill, BsChevronDown, BsChevronCompactRight, BsFillEnvelopeOpenFill, BsFillTelephoneFill } from "react-icons/bs";
import { Button, NavDropdown, Navbar, Nav, Carousel, Row, Col, Container, Card, CardGroup, Stack } from 'react-bootstrap';


function App() {
      return (
            <>

                  <header>
                        <div className='top_header'>
                              <div className='flex top_hed justify-between'>
                                    <div className='left_side'>
                                          <BsClock className='all_icons' />OPENING HOURS
                                          <span> 08:00 AM - 09:00 PM</span>
                                    </div>
                                    <div>
                                          <BsFacebook className='all_icons' /> <BsTwitter className='all_icons' /><BsPinterest className='all_icons' /><BsPlayBtnFill className='all_icons' />
                                    </div>
                                    <div className='left_side'>
                                          <BsGeoAltFill className='all_icons' />LOCATION :
                                          <span> 55 MAIN STREET, NEW YORK</span>
                                    </div>
                              </div>
                        </div>
                        <div className='navigation_bar'>
                              <Navbar expand="lg" className='top_hed'>
                                    <Navbar.Brand href="#home"><img src={require('./img/logo.png')} className="logo"></img></Navbar.Brand>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav ">
                                          <Nav className="me-auto content_nav ">
                                                <Nav.Link href="#home" className='text-light content_navbr'>HOME <BsChevronDown className='' /></Nav.Link>
                                                <Nav.Link href="#link" className='text-light content_navbr'>ABOUT</Nav.Link>
                                                <Nav.Link href="#home" className='text-light content_navbr'>MENU <BsChevronDown /></Nav.Link>
                                                <Nav.Link href="#link" className='text-light content_navbr'> PAGES <BsChevronDown /></Nav.Link>
                                                <Nav.Link href="#home" className='text-light content_navbr'> BLOG <BsChevronDown /></Nav.Link>
                                                <Nav.Link href="#link" className='text-light content_navbr'> CONTACTS</Nav.Link>
                                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.2">
                                                            Another action
                                                      </NavDropdown.Item>
                                                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                      <NavDropdown.Divider />
                                                      <NavDropdown.Item href="#action/3.4">
                                                            Separated link
                                                      </NavDropdown.Item>
                                                </NavDropdown> */}
                                          </Nav>
                                          <button className='book_table_btn'>BOOK A TABLE</button>
                                    </Navbar.Collapse>

                              </Navbar>
                        </div>
                  </header>
                  <Carousel className='main_crosl'>
                        <Carousel.Item interval={50000} className='slider_men'>
                              <img src={require('./img/slider1.jpeg')} className='slider_img'></img>
                              <Carousel.Caption className='caption_carosal'>

                                    <b>____ WELCOME TO THE  KAFFEN</b>
                                    <p>The London <br /> Coffee House</p>
                                    <button className='slider_btn'>EXPLORE MORE <BsChevronCompactRight /> </button>
                                    <button className='slider_btn1'>GET DELIVERY <BsChevronCompactRight /> </button>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={500} className='slider_men'>
                              <img src={require('./img/slider2.jpeg')} className='slider_img' ></img>
                              <Carousel.Caption className='caption_carosal'>
                                    <b>____ WELCOME TO THE  KAFFEN</b>
                                    <p>The Paris <br /> Coffee House</p>
                                    <button className='slider_btn'>EXPLORE MORE <BsChevronCompactRight /> </button>
                                    <button className='slider_btn1'>GET DELIVERY <BsChevronCompactRight /> </button>
                              </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item className='slider_men'>
                              <img src={require('./img/slider3.jpeg')} className='slider_img3' ></img>
                              <Carousel.Caption className='caption_carosal'>

                                    <b>____ WELCOME TO THE  KAFFEN</b>
                                    <p>Great Coffee<br />Good Vibes</p>
                                    <button className='slider_btn'>EXPLORE MORE <BsChevronCompactRight /> </button>
                                    <button className='slider_btn1'>GET DELIVERY <BsChevronCompactRight /> </button>
                              </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
                  {/*----------------------------------------- About us---------------------------------------- */}
                  <section className='main_about spacer'>
                        <Container >
                              <Row>
                                    <Col lg='6 about_content'>
                                          <h5>ABOUT US</h5>
                                          <h1>Organic & Fresh Coffee<br />
                                                Provider Center</h1>
                                          <p>Sed ut perspiciatis unde omnis iste natus error voluptate accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione</p>
                                          <div className='about_img flex button'>
                                                <div>
                                                      <img src={require('./img/asset 1.png')}></img>
                                                </div>
                                                <div className='p'>Quis autem vel eum iure <br></br>reprehenderit in ealuptate velit<br /> esse molestiae</div>
                                          </div>
                                    </Col>
                                    {/* <Col lg='6'>
                                          <img src={require('./img/asset 2.png')} className="img_about2"></img>
                                    </Col> */}
                              </Row>
                              <div>
                                    {/* <Row className='spacer-top service_img'>
                                          <Col lg='4' md='3'><img src={require('./img/res.jpeg')}></img></Col>
                                          <Col lg='4' md='3'><img src={require('./img/coffe.jpeg')}></img></Col>
                                          <Col lg='4' md='3'><img src={require('./img/food.jpeg')}></img></Col>
                                    </Row> */}
                                    <CardGroup className='spacer-top top'>
                                          <Card className='sec_img'>
                                                <img src={require('./img/res2.jpeg')} />
                                                <h2>restaurant menu</h2>
                                          </Card>
                                          <Card className='sec_img'>
                                                <img src={require('./img/coffe2.jpeg')} className='img2' />
                                                <h2>coffee menu</h2>
                                          </Card>
                                          <Card className='sec_img'>
                                                <img src={require('./img/food2.jpeg')} />
                                                <h2>Food Services</h2>
                                          </Card>
                                    </CardGroup>
                              </div>
                        </Container>

                  </section>
                  <section className='bg'>
                        <div>
                              <div className=' spacer-top heading'>
                                    <h4>CHOOSE BEST COFFEE</h4>
                                    <h1>Kaffen Popular Coffee Menu</h1>
                              </div>
                              <div>
                                    <Container className='menu_top'>
                                          <img src={require('./img/asset\ 32.png')} className='bg_img_menu'></img>
                                          <Row>
                                                <Col className='flex menu_img1 '>
                                                      <div className='hover_iimg'>
                                                            <img src={require('./img/asset\ 6.jpeg')}></img>
                                                      </div>
                                                      <span>
                                                            <h2>Americano Coffee</h2>
                                                            <p>2/3 espresso, 1/3 streamed milk</p>
                                                            <h4>.................$4.9</h4>
                                                      </span>
                                                </Col>
                                                <Col className='flex menu_img1'>
                                                      <div className='hover_iimg'>
                                                            <img src={require('./img/asset 7.jpeg')}></img>
                                                      </div>
                                                      <span>
                                                            <h2>Espresso Coffee</h2>
                                                            <p>2/3 espresso, 1/3 streamed milk</p>
                                                            <h4>.................$4.9</h4>
                                                      </span>
                                                </Col>
                                          </Row>
                                          <Row>
                                                <Col className='flex menu_img1 '>
                                                      <div className='hover_iimg'>
                                                            <img src={require('./img/asset\ 8.jpeg')}></img>
                                                      </div>
                                                      <span>
                                                            <h2>Barista Pouring Syrup</h2>
                                                            <p>2/3 espresso, 1/3 streamed milk</p>
                                                            <h4>.................$3.5</h4>
                                                      </span>
                                                </Col>
                                                <Col className='flex menu_img1'>
                                                      <div className='hover_iimg'>
                                                            <img src={require('./img/asset\ 9.jpeg')}></img>
                                                      </div>
                                                      <span>
                                                            <h2>Cold - Coffee</h2>
                                                            <p>2/3 espresso, 1/3 streamed milk</p>
                                                            <h4>.................$6.0</h4>
                                                      </span>
                                                </Col>
                                          </Row>
                                          <Row>
                                                <Col className='flex menu_img1 '>
                                                      <div className='hover_iimg'>
                                                            <img src={require('./img/asset\ 10.jpeg')}></img>
                                                      </div>
                                                      <span>
                                                            <h2>Cappuccino Arabica</h2>
                                                            <p>2/3 espresso, 1/3 streamed milk</p>
                                                            <h4>.................$2.8</h4>
                                                      </span>
                                                </Col>
                                                <Col className='flex menu_img1'>
                                                      <div className='hover_iimg'>
                                                            <img src={require('./img/asset\ 11.jpeg')}></img>
                                                      </div>
                                                      <span>
                                                            <h2>Milk Cream Coffee</h2>
                                                            <p>2/3 espresso, 1/3 streamed milk</p>
                                                            <h4>.................$7.5</h4>
                                                      </span>
                                                </Col>
                                          </Row>
                                    </Container>
                              </div>
                        </div>
                  </section>
                  <header>
                        <div>
                              <Container>
                                    <Row>
                                          <Col className='header_num'>
                                                <div>
                                                      <h1>256+</h1>
                                                      <h2>Premium Clients </h2>
                                                      <p>Sed ut perspiciatis unde</p>
                                                </div>
                                          </Col>
                                          <Col className='header_num'>
                                                <div>
                                                      <h1>362+</h1>
                                                      <h2>Expert Members</h2>
                                                      <p>Sed ut perspiciatis unde</p>
                                                </div>
                                          </Col>
                                          <Col className='header_num'>
                                                <div>
                                                      <h1>753+</h1>
                                                      <h2>Winning Awards </h2>
                                                      <p>Sed ut perspiciatis unde</p>
                                                </div>
                                          </Col>
                                    </Row>
                              </Container>
                        </div>
                  </header>
                  <footer>
                        <div className='foot_bg  '>
                              <div className='container' >
                                    <div className='flex  spacer last_content'>
                                          <span>
                                                <h4>NEED A TABLE ON COFFEE HOUSE</h4>
                                                <h1>Booking Table For Your & Family Members</h1>
                                          </span>
                                          <span>
                                                <button className='book_table_btn'>BOOK A TABLE</button>
                                          </span>
                                    </div>
                              </div>
                              <div className='main_foot spacer-top'>
                                    <Container>
                                          <Row className='row_foot'>
                                                <Col lg={2} sm={6} className='col_foot'><img src={require('./img/logo.png')} className="logo"></img></Col>
                                                <Col lg={3} sm={6} className='col_foot'>
                                                      <h3>Working Hours</h3>
                                                      <ul>
                                                            <li>Sunday - Thursday</li>08:00 am - 09:00pm
                                                            <li>Only Friday</li>03:00 pm - 09:00pm<br />
                                                            <i>Saturday Close</i>
                                                      </ul>
                                                </Col>
                                                <Col lg={3} sm={6} className='col_foot'>
                                                      <h3>Contact Us</h3>
                                                      <div>
                                                            <BsGeoAltFill className='icon_foot' /> Location :
                                                            <p>55 Main Street, New York</p>
                                                      </div>
                                                      <div>
                                                            <BsFillEnvelopeOpenFill className='icon_foot' /> Email Address :
                                                            <p>kaffendev@gmail.com</p>
                                                      </div>
                                                      <div>
                                                            <BsFillTelephoneFill className='icon_foot' /> Phone Number :
                                                            <p>+012 (345) 678 99</p>
                                                      </div>
                                                </Col>
                                                <Col lg={4} sm={6} className='col_foot'>
                                                      <h3>Gallery</h3>
                                                      <div className='all_foot_img'>
                                                            <img src={require('./img/asset 7.jpeg')}></img>
                                                            <img src={require('./img/asset 18.jpeg')}></img>
                                                            <img src={require('./img/asset 19.jpeg')}></img>
                                                            <img src={require('./img/asset 15.jpeg')}></img>
                                                            <img src={require('./img/asset 16.jpeg')}></img>
                                                            <img src={require('./img/asset 7.jpeg')}></img>
                                                      </div>
                                                </Col>
                                          </Row>
                                          <hr></hr>
                                          <h6 className='foot_copy'>Copyright © 2022 Kaffen. All Rights Reserved.</h6>
                                    </Container>
                              </div>
                        </div>
                  </footer>
            




            </>
      );
}

export default App;
