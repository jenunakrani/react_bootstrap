import Footer from "./Footer"
import Header from "./Header"
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Exclusive() {

  return (
    <>
      <Header />
      <div className=" text-center  container">
        <h1 className="title">Exclusive McDonald's Deals</h1>
      </div>
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
      <div className="container spacer">
        <div className="row">
          <div className="col-sm-6 ">
            <img src={require('./img/Large Fries.jpg')} className="exclusive_img"></img>
            <h1>$1 Large Fries*</h1><b  className="pt-4">Your good deed of the day: sharing your Fries (it's easier when they're just $1).</b><p  className="pt-4">*Offer valid thru 12/31/22 at participating McDonald’s. Valid 1x/week. Refer to McD app for details. Mobile Order & Pay at Participating McDonald’s. McD app download and registration required.</p>
            <button className='top_btn '>Order in the App</button>

          </div>
          <div className="col-sm-6 ">
            <img src={require('./img/Size Coffee.png')} className="exclusive_img"></img>
            <h1>$1 Large Fries*</h1><b  className="pt-4">Your good deed of the day: sharing your Fries (it's easier when they're just $1).</b><p className="pt-4">*Offer valid thru 12/31/22 at participating McDonald’s. Valid 1x/week. Refer to McD app for details. Mobile Order & Pay at Participating McDonald’s. McD app download and registration required.</p>
            <button className='top_btn 'style={{width:200}}>Get Deal in the App</button>
            
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-sm-6 ">
            <img src={require('./img/Fries Friday.jpg')} className="exclusive_img"></img>
            <h1>Free Fries Friday</h1><b  className="pt-4">Enjoy free medium Fries with any $1 minimum Mobile Order & Pay purchase, only in the app.* After all—without free Fries, Fridays are just another day.</b><p  className="pt-4">*Valid 1x each Friday thru 12/31/22 with minimum purchase of $1 (excluding tax). McDonald’s app download and registration required. Mobile Order & Pay at participating McDonald’s.</p>
            <button className='top_btn ' style={{width:200}}>Use the App to Order</button>

          </div>
         
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Exclusive