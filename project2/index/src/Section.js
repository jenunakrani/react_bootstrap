import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';
function Section() {
    return (
        <> <Header />

            <section >
                <Container>
                    <Row>
                        <Col xl={8} lg={7} ><img src={require('./img/first.jpg')} className="first_img"></img></Col>
                        <Col xl={4} lg={4} className='content1'>
                            <h1>Straight to the Points: McDelivery® in the App</h1>
                            <p>The McDonald’s app is now the only place you’ll earn MyMcDonald’s Rewards points on every McDelivery order. Plus, you can get those free McDonald’s rewards you earn delivered, too. Just order, relax and enjoy—we’ll bring your faves to you.*</p>
                            <h6>*At participating McDonald's. Only in the app. App registration required. Must be opted into MyMcDonald's Rewards. In app delivery not yet available in CO.</h6>
                            <button className="bton">
                                Earn Points on McDelivery
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='spacer-top '  >
                <Container>
                    <Row>
                        <Col xl={8} lg={7} ><img src={require('./img/sec2.jpg')} className="first_img"></img></Col>
                        <Col xl={4} lg={4} className='content1'>
                            <h1>The McRib® is Back to Say Bye</h1>
                            <p>Savor every tangy bite like it’s your last because it just might be. This is the McRib Farewell Tour, so order yours before it’s gone, in the app for delivery or pickup by 11/20/22.*</p>
                            <h6>*At participating McDonald’s. App download and registration required. </h6>
                            <button className="bton">
                                Order in the App
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='spacer-top '  >
                <Container>
                    <Row>
                        <Col xl={8} lg={7} ><img src={require('./img/third.jpg')} className="first_img"></img></Col>
                        <Col xl={4} lg={4} className='content1'>
                            <h1>
                                Free Big Mac® Now.* Free McDonald’s Later.^</h1>
                            <p>Get a free Big Mac when you download the McDonald’s app and join MyMcDonald’s Rewards. After your first purchase you’ll earn 1500 bonus points to redeem for free McDonald’s.</p>
                            <h6>*Offer valid 1x thru the last day of the month for first time app users at participating McDonald's. May take up to 48 hours to appear in your deals. Excludes delivery.
                                ^Free MyMcDonald’s Rewards points valid 1x thru 12/31/22 for first time MyMcDonald’s Rewards users. Program available only at participating McDonald’s. McD app download and registration required. </h6>
                            <button className="bton">
                                Download the App
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='spacer-top '  >
                <Container>
                    <Row>
                        <Col xl={8} lg={7} ><img src={require('./img/forth.jpg')} className="first_img"></img></Col>
                        <Col xl={4} lg={4} className='content1 '>
                            <h1>
                                Your Story Deserves a Hollywood Ending</h1>
                            <p>Latinos have stories to tell, yet they make up less than 1% of the ones told in Hollywood. As a champion of the Hispanic community McDonald’s wants to help change that. With Spotlight Dorado, McDonald’s is giving aspiring Latino filmmakers a chance to participate in a short film competition. Aspiring filmmakers will bring their vision to life having their story produced into a short film with invaluable mentorship from renowned industry leaders and a chance to showcase their film in film festivals around the country.</p>

                            <button className="bton">
                                Learn More About Spotlight Dorado
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='spacer-top '  >
                <Container>
                    <Row>
                        <Col xl={8} lg={7} ><img src={require('./img/fifth.jpg')} className="first_img"></img></Col>
                        <Col xl={4} lg={4} className='content1'>
                            <h1>
                                Order McDelivery® Now*</h1>
                            <p>Get all your McDonald’s favorites delivered right to your doorstep with McDelivery® on Uber Eats, DoorDash or Grubhub.</p>
                            <h6> *At participating McDonald’s. Prices may be higher than at restaurants. Delivery/service fees apply </h6>
                            <button className="bton">
                                Order McDelivery Now
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='spacer-top '  >
                <Container>
                    <Row>
                        <Col xl={8} lg={7} ><img src={require('./img/sec.jpg')} className="first_img"></img></Col>
                        <Col xl={4} lg={4} className='content1'>
                            <h1>
                                Deals for Days</h1>
                            <p>Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup.</p>
                            <h6>
                                Deals for Days
                                Get exclusive deals on your McDonald’s favorites in the app with contactless Mobile Order & Pay* and convenient Drive Thru or Curbside pickup. *Mobile Order & Pay at participating McDonald’s.</h6>
                            <button className="bton">
                                Get App Deals
                            </button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />

        </>
    )

}
export default Section