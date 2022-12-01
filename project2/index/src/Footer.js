import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, Nav, Navbar, NavDropdown } from 'react-bootstrap';
function Footer()
{
          return(
                    <>
                               <footer className='spacer'>
        <Container>
          <Row>
            <Col>
              <ul>
                <h6 className='foot'><b>About Us</b></h6>
                <li>About Us</li>
                <li>Our History</li>
                <li>Leadership Team</li>
                <li>Values In Action</li>
                <li>Franchise Info</li>
                <li>Recalls & Alerts</li>
                <li>Real Estate</li>
                <li>Digital Accessibility</li>
                <li>Investor Relations</li>
                <li>News & Notifications</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <h6 className='foot'><b>Services</b></h6>
                <li>Services Overview</li>
                <li>Wi-Fi</li>
                <li>Gift Cards</li>
                <li>PlayPlaces & Parties</li>
                <li>McDelivery®</li>
                <li>Mobile Order & Pay</li>
                <li>Trending Now</li>
                <li>McDonald’s Merchandise</li>
                <li>Family Fun Hub</li>
                <li>MyMcDonald's Rewards</li>
                <li>McCafé®</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <h6 className='foot'><b>Community</b></h6>
                <li>Community</li>
                <li>Community</li>
                <li>HACER® Scholarships for Hispanic Students</li>
                <li>Ronald McDonald House Charities</li>
                <li>McDonald’s Asian Pacific American</li>
                <li>McDonald’s International</li>
                <li>Black and Positively Golden</li>
                <li>McDonald’s LGBTQ+</li>
              </ul>
            </Col>
            <Col>
              <ul>
                <h6 className='foot'><b>Contact Us</b></h6>
                <li>Contact Us</li>
                <li>Gift Card FAQs</li>
                <li>Donations</li>
                <li>Employment</li>
                <li>Restaurant Feedback</li>
                <li>Frequently Asked Questions</li>
              </ul>
            </Col>
          </Row>

        </Container>
        <Container className=' foot_last'>
          <Row className='store'>
            <Col lg={6} md={12} className='icons_foot'>
              <img src={require('./img/facebook.png')}></img>
              <img src={require('./img/twitter.png')}></img>
              <img src={require('./img/youtube.png')}></img>
              <img src={require('./img/instagram.png')}></img>
              <img src={require('./img/tumblr.png')}></img>
              <img src={require('./img/spotify.png')}></img>
            </Col>

            <Col lg={6} md={12} className='play_btn_foot' >
              <img src={require('./img/google_play_badge.png')}></img>
              <img src={require('./img/app_store_badge.png')}></img>
            </Col>
          </Row>

        </Container>
        <Container>
          <hr></hr>

          <Row>
            <Col lg={8} className='last_to_last'>
              <b className='privacy'>Privacy (Updated)</b>
              <span className='span'>California Privacy Notice</span>
              <span>Terms & Conditions</span>
              <span>Digital Accessibility</span>
              <span>Do Not Sell My Personal Information </span>
              <span>Cookie Settings</span>
            </Col>
            <Col className='copyright_foot ' >
              <img src={require('./img/arches-logo_108x108_(2).jpg')}></img>
            </Col>
            <Col lg='3'>
              <span>© 2017 - 2022 McDonald's. All Rights Reserved</span>

            </Col>
          </Row>
        </Container>
      </footer>
                    </>
          )

}
export default Footer