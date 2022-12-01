import Footer from "./Footer"
import Header from "./Header"
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function About() {

    return (
        <>
            <Header />
            <div className=" text-center  container">
                <h1 className="title">About Our Food</h1>
            </div>
            <div className=" container sbout_img ">
                <img src={require('./img/our_food.jpg')} ></img>
            </div>
            <section className='spacer' >
                <Container>
                    <Row>
                        <Col>
                            <h1>We’re Passionate About Our Food</h1>

                            <p>From adding more balanced options to our Happy Meal®, to serving up fresh beef Quarter Pounder® burgers that are cooked when you order, we’re always finding ways to show our commitment to our customers and our food. </p></Col>
                    </Row>
                </Container>

            </section>
            {/* <section className=' '  >
               
            </section> */}
            <div className="container ">
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={require('./img/our_food1.jpg')} className="exclusive_img"></img>
                        <h1>Commitment to Quality</h1><p className="pt-4">We're dedicated to improving the way we prepare our quality food and the ingredients that go into it..</p>
                        <button className='top_btn '>Learn More</button>

                    </div>
                    <div className="col-sm-6 ">
                    <img src={require('./img/our_food2.jpg')} className="exclusive_img"></img>
                        <h1>What's in Your Food</h1><p className="pt-4">Find out what makes our ingredients special.</p>
                        <button className='top_btn ' style={{ width: 200 }}>Learn More</button>

                    </div>
                </div>
                <div className="row spacer">
                    <div className="col-sm-6 ">
                        <img src={require('./img/our_food3.jpg')} className="exclusive_img"></img>
                        <h1>Our Food Philosophy</h1><p className="pt-4">We’re passionate about our food. That’s why we’re committed to always evolving what matters to you.</p>
                        <button className='top_btn '>Learn More</button>

                    </div>
                    <div className="col-sm-6 ">
                    <img src={require('./img/our_food4.jpg')} className="exclusive_img"></img>
                        <h1>Nutrition Calculator</h1><p className="pt-4">Our nutrition calculator has the McDonald’s menu nutrition information you’re seeking. Learn more about your favorite meals.</p>
                        <button className='top_btn ' style={{ width: 200 }}>Learn More</button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={require('./img/our_food5.jpg')} className="exclusive_img"></img>
                        <h1>Our Food Experts</h1><p className="pt-4">From our chefs, to our dieticians and suppliers, McDonald’s food experts care deeply about the food you eat.</p>
                        <button className='top_btn '>Learn More</button>

                    </div>
                    <div className="col-sm-6 ">
                    <img src={require('./img/our_food6.jpg')} className="exclusive_img"></img>
                        <h1>Fresh Beef</h1><p className="pt-4">Our Quarter Pounder®* patty is made with 100% fresh beef and cooked right when you order. It’s hot and deliciously juicy and full of flavor.</p>
                        <button className='top_btn ' style={{ width: 200 }}>Learn More</button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 ">
                        <img src={require('./img/our_food7.jpg')} className="exclusive_img"></img>
                        <h1>Happy Meal® Nutrition</h1><p className="pt-4">When your kids enjoy a meal that’s delicious and balanced, you’ll enjoy it too.

</p>
                        <button className='top_btn '>Learn More</button>

                    </div>
                    <div className="col-sm-6 ">
                    <img src={require('./img/our_food8.jpg')} className="exclusive_img"></img>
                        <h1>Variety of Choices</h1><p className="pt-4">When it comes to quality options, we’ve got you covered.</p>
                        <button className='top_btn ' style={{ width: 200 }}>Learn More</button>

                    </div>
                </div>
            </div>
                
         
            <Footer />
        </>
    )
}
export default About