import './App.css';
import Header from "./Header";
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Footer from './Footer';

function Download() {
  return (
    <div>
      <Header />
      <div className=" text-center  container">
        <h1 className="title">McDonald's App</h1>
      </div>
      <Container>
        <Row>
          <Col xl={8} lg={7} ><img src={require('./img/first.jpg')} className="first_img"></img></Col>
          <Col xl={4} lg={5} className='content1'>
            <h1>Straight to the Points: McDelivery® in the App</h1>
            <p>The McDonald’s app is now the only place you’ll earn MyMcDonald’s Rewards points on every McDelivery order. Plus, you can get those free McDonald’s rewards you earn delivered, too. Just order, relax and enjoy—we’ll bring your faves to you.*</p>
            <h6>*At participating McDonald's. Only in the app. App registration required. Must be opted into MyMcDonald's Rewards. In app delivery not yet available in CO.</h6>
            <button className="bton">
              Earn Points on McDelivery
            </button>
          </Col>
        </Row>
      </Container>
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
      <section className='spacer' >
        <Container>
          <Row>
            <Col xl={5} lg={6}><img src={require('./img/AppPromo.jpg')} className="Deliciousness_img"></img></Col>
            <Col xl={7} lg={6} className='content1'>
            <b className="Download_title_last">Deliciousness At Your Fingertips</b>

              <p className='title_last_P'>Download the app for exclusive deals and easy ordering.</p>
              <img src={require('./img/google_play_badge.png')}></img>
              <img src={require('./img/app_store_badge.png')}></img>
            </Col>
          
          </Row>
        </Container>
        
      </section>
      <section className='' >
        <Container>
          <Row>
            <Col>
                <h1>Deals and Much More</h1>
            
            <p>With the McDonald’s app, you’ll get access to exclusive deals. Use the app to order ahead and pass the line with Mobile Order & Pay plus join MyMcDonald’s Rewards to earn points on every order to redeem for free McDonald's.</p></Col>
          </Row>
        </Container>

      </section>
      <Footer/>
    </div>
   
  );
}

export default Download;