import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IconName } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid="md">
        <Row variant="primary">
          <Col  xl={2} lg={3} md={8}><img src={require('./img/g_1.jpg')}></img></Col>
          <Col ><img src={require('./img/g_2.jpg')}></img></Col>
          <Col ><img src={require('./img/g_3.jpg')}></img></Col>
        </Row>
        <Row>
          <Col ><img src={require('./img/g_4.jpg')}></img></Col>
          <Col ><img src={require('./img/g_5.jpg')}></img></Col>
          <Col ><img src={require('./img/g_6.jpg')}></img></Col>
       

        </Row>
      </Container>



    </>
  );
}

export default App;
