import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

export default function Contact() {


  const handleDownload = () => {
    const resumeUrl = '/CV.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div>
      <Container>
      <div class="section">
      <div style={{position:"absolute", zIndex:"0", maxWidth:'100%', right:'1px', top:'70px', width:'100%', opacity:'50%'}}><img src="images/linesPatternDark.png" style={{width:'100%'}}></img></div>
            <div style={{marginBottom:'50px'}}>
              <div class="line"></div>
              <h1>МОИ КОНТАКТЫ</h1>
            </div>
            <div style={{width:'200px'}}>
              <Row>
                <Col lg={2}>
                  <img src="images/phoneIcon.svg"></img>
                </Col>
                <Col>
                  <p>+372 5306 5565</p>
                </Col>
              </Row>

              <Row>
                <Col lg={2}>
                  <img src="images/mailIcon.svg"></img>
                </Col>
                <Col>
                  <p>valerijazhe@gmail.com</p>
                </Col>
              </Row>

              <Row>
                <Col lg={2}>
                  <img src="images/locationIcon.svg"></img>
                </Col>
                <Col>
                  <p>Narva, Ida-Virumaa</p>
                </Col>
              </Row>
            </div>

            <button class="downloadButton" onClick={handleDownload}>
                СКАЧАТЬ CV
            </button>
        </div>

        <div class="section">
            <div style={{marginBottom:'50px'}}>
              <div class="line"></div>
              <h1>СВЯЖИТЕСЬ СО МНОЙ</h1>
            </div>
        </div>
      </Container>
      <ContactForm></ContactForm>
    </div>
  );
}
