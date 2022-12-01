import Footer from "./Footer"
import Header from "./Header"
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Rewards() {

    return (
        <>
            <Header />
            <div className="   container">
                <h1 className="title text-center">MyMcDonald’s Rewards</h1>
                <p className="my-5">With the McDonald’s app, you can earn points on every order to redeem for free McDonald's. Plus, get access to exclusive daily deals, easily re-order faves and select convenient pickup options with Mobile Order & Pay.</p>
            </div>
            <section className='my-5 '  >
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
                        <Col>
                            <h1>How to Earn Points and Redeem Faves</h1>

                            <p>Order like a pro––all it takes is one code or one scan to earn MyMcDonald’s Rewards points, quickly pay and redeem your favorites.</p></Col>
                    </Row>
                </Container>

            </section>
            <div className="container ">
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={require('./img/earn_point.jpg')} className="Deliciousness_img"></img>
                        <h2>Easily Earn Points</h2><p className="pt-4">Select the ‘Earn Points’ tab in the McDonald's app found on the bottom menu bar. Access the 4-digit Drive Thru Code or code to scan at the counter or kiosk. When you place your order in the app, you'll automatically earn your points.</p>
                        <button className='top_btn '>Order in the App</button>

                    </div>
                    <div className="col-sm-6 ">
                        <img src={require('./img/earn_point1.jpg')} className="Deliciousness_img"></img>
                        <h2>Pay & Earn All in One Step</h2><b className="pt-4">Your good deed of the day: sharing your Fries (it's easier when they're just $1).</b><p className="pt-4">*Offer valid thru 12/31/22 at participating McDonald’s. Valid 1x/week. Refer to McD app for details. Mobile Order & Pay at Participating McDonald’s. McD app download and registration required.</p>
                        <button className='top_btn ' style={{ width: 200 }}>Get Deal in the App</button>

                    </div>
                </div>
            </div>
            <section className='spacer' >
                <Container>
                    <Row>
                        <Col>
                            <h1>More Points Unlock More Rewards</h1>

                            <p>It's easy to track your McDonald's points and see how far you are from unlocking the next tier of free McDonald's.</p></Col>
                    </Row>
                </Container>

            </section>
            {/* <div className="container ">
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={require('./img/reward1.jpg')} className="exclusive_img"></img>
                        <h1>1500 Points</h1><p className="pt-4">Choose your McDonald's item, whether you’re craving a McChicken® (Regular or Hot ‘N Spicy), Hash Browns, Vanilla Cone or our classic Cheeseburger.</p>

                    </div>
                    <div className="col-sm-6 ">
                        <img src={require('./img/reward2.jpg')} className="exclusive_img"></img>
                        <h1>3000 Points</h1><p className="pt-4">Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee.</p>

                    </div>
                </div>
            </div> */}
            <div className="container spacer">
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={require('./img/reward1.jpg')} className="exclusive_img"></img>
                        <h1>1500 Points</h1><p className="pt-4">Choose your McDonald's item, whether you’re craving a McChicken® (Regular or Hot ‘N Spicy), Hash Browns, Vanilla Cone or our classic Cheeseburger</p>

                    </div>
                    <div className="col-sm-6 ">
                        <img src={require('./img/reward2.jpg')} className="exclusive_img"></img>
                        <h1>3000 Points</h1><p className="pt-4">Step up and take your pick between medium Fries, Sausage Burrito , 6 piece Chicken McNuggets®  or a large Iced Coffee.</p>

                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
export default Rewards