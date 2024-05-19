import React, {Component} from 'react'
import {Container, Nav, Row, Col} from 'react-bootstrap';
import Content from './Content.js';

export default class Footer extends Component {

  handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Добавляет плавную прокрутку
    });
  };

  render() {
  return (
    <footer style={{ position: 'relative', marginTop: 'auto' }}>
        <Container fluid style={{
          display:'flex',
          height:'150px',
          alignContent:'center',
          bottom:0,
          padding:'50px 0px 70px 0px',
          color:'grey',
          justifyContent: 'center',
          }}>

          <div class="dark-container">
            <Row>
              <Col>
            <p style={{width:'400px'}}>&copy;2024«Valerija Zerebtsova | Isikliku portfolio veebisait»
Все права защищены.</p><Nav.Link href="/adminlogin">Административная панель</Nav.Link>
              </Col>
              <Col style={{display:'flex', justifyContent:'flex-end', alignItems:'start' }}>
              <img onClick={this.handleScrollToTop} src="images/upButton.svg"></img>
              </Col>
            </Row>
          </div>

        </Container>
    </footer>
  )
}
}
