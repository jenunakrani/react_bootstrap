import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import { Button, Card, Alert, Accordion, Badge,Breadcrumb, ButtonGroup, DropdownButton,Dropdown,Carousel,CloseButton } from 'react-bootstrap';

function App() {
  return (
    <div>

{/* ============================================================
          Alert
============================================================= */}
      <Alert >
        This is a alert—check it out!
      </Alert>
{/* ============================================================
          Accordion
============================================================= */}
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    {/* ============================================================
          Badge
============================================================= */}
      <div>
      <h1>
        Example heading <Badge bg="secondary">New</Badge>
      </h1>
      <h2>
      <Button variant="primary">
      Profile  <Badge bg="secondary">10</Badge>
      {/* <span className="visually-hidden">unread messages</span> */}
    </Button>
      </h2>
      <h3>
        Example heading <Badge bg="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge bg="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge bg="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge bg="secondary">New</Badge>
      </h6>
    </div>
 {/* ============================================================
          Breadcrumb 
============================================================= */}
<Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
        Library
      </Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item active" aria-current="page">Home</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{/* ============================================================
          button
============================================================= */}
  <Button variant="success">hey </Button>

  <ButtonGroup>
  <Button variant="dark">hey </Button>
  <Button variant="light">hey1</Button>
  <Button variant="dark">hey 2</Button>

  </ButtonGroup>

  <ButtonGroup>
      <Button>1</Button>
      <Button>2</Button>

      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
        <Dropdown.Item>Dropdown link</Dropdown.Item>
        <Dropdown>Dropdown link</Dropdown>
      </DropdownButton>
    </ButtonGroup>
{/* ============================================================
          CARD
============================================================= */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
{/* ============================================================
          slider
============================================================= */}
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-50"  src={require('./img/moon2.jpg')} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-50 "  src={require('./img/moon3.jpg')} alt="First slide" />


        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-50"  src={require('./img/moon4.jpg')} alt="First slide" />


        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <h1><BsFillEmojiHeartEyesFill /></h1>     
      <CloseButton />

    </div>
    
  );
}

export default App;
