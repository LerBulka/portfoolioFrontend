import React, {useState} from 'react'
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
      const [messageSent, setMessageSent] = useState(false);
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        
        try {
          const response = await fetch('https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/email/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            setMessageSent(true);
          } else {
            console.error('Failed to send email');
          }
        } catch (error) {
          console.error('Failed to send email', error);
        }
      };

  return (
    <div>
        <Container fluid style={{backgroundColor:"rgba(30, 30, 30, 1)", display:'flex', justifyContent:'center'}}>
      {messageSent ? (
            <div className="alert alert-success mt-3" role="alert">
              Message sent successfully!
            </div>
          ) : null}
          
        <div class="dark-container">
          <Row>
            <Col>
              <div class="contacttext-block">
                <div style={{display:'flex', marginBottom:'30px'}}>
                  <p class="white-text" style={{marginRight:'20px'}}>В соц. сетях</p>
                  <a href="https://wa.me/37253065565"><img style={{marginRight:'10px'}} src="images/watsapp.png"></img></a>
                  <a href="https://t.me/trestoros"><img style={{marginRight:'10px'}} src="images/telegram.png"></img></a>
                  <a href="https://www.facebook.com/valerijaze"><img style={{marginRight:'10px'}} src="images/facebook.png"></img></a>
                </div>

                <p class="white-text">или воспользуйтесь формой, и я сама Вам напишу:</p>
              </div>         
              <Form onSubmit={handleSubmit}>
              <div class="form-block">
                <div style={{display:'flex'}}>
                  <Form.Group controlId="formName" style={{marginRight:'40px'}}>
                    <Form.Label>Ваше Имя</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Введите имя"
                      name="name"
                      value={formData.name} required
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Ваш адресс</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Введите Эл.почту"
                      name="email"
                      value={formData.email} required
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>

                <div>

                  <Form.Group controlId="formMessage">
                    <Form.Label>Ваше сообщение</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Сообщение"
                      name="message"
                      value={formData.message} required
                      onChange={handleChange} 
                      style={{marginBottom:'40px'}}
                    />
                  </Form.Group>

                </div>
                
                  <Button type="submit">
                    ОТПРАВИТЬ
                  </Button>
                </div>

              </Form>
            </Col>

            <Col style={{display:'flex',justifyContent: 'flex-end'}}>
              <img class="contact-img" src="images/contactImage.png"></img>
            </Col>
          </Row>       
        </div>
      </Container>
    </div>
  )
}
