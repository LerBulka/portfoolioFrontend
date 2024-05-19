import React, {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';




export default function Home() {


  const handleDownload = () => {
    const resumeUrl = '/CV.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <div>
      <Container>
        <div class="home-banner" id="start">
          <Row>
            <Col>
              <div>
                <p class="name-text">Портфолио разработчика</p>
                
              </div>
              <div style={{marginTop:'50px', marginBottom:'50px'}}>
              <Link to={`/webdesign`}><button class="arrow-buttonWhite">СМОТРЕТЬ<img class="icon-arrow" src="images/arrowWhite.svg"></img></button></Link>
              </div>
            </Col>
            <Col>
              <div class="line"></div>
              <h1 style={{color:"white", fontWeight:'400'}}>Валерия Жеребцова</h1>
              <p class="white-text" style={{fontSize:'20px', width:'400px'}}>Младший разработчик ПО, веб-дизайнер, графический дизайнер</p>
            </Col>
          </Row>
        </div>

        <div class="section" id="section1">

          <div style={{marginBottom:'50px'}}>
          <div class="line">
          </div>
          <h1>ВИДЫ ДЕЯТЕЛЬНОСТИ</h1>
          </div>

          <div class="activities-block" style={{width:'100%', display:'flex', flexWrap:'wrap'}}>            
            <div class="activity-block">
              <Row style={{alignItems:'flex-start'}}>
                <Col>
                   <p class="activity-title">Веб-дизайн</p>
                </Col>
                <Col>
                  <img src="images/webdesignIcon.svg"></img>
                </Col>
              </Row>
              <Row style={{alignItems:'flex-end'}}>
                <Col lg={9}>
                  <p class="activity-description">Работы по созданию уникальных дизайнов для веб-сайтов. Разработка красивых макетов, которые не только привлекают внимание, но и...</p>
                </Col>
                <Col lg={3}>
                  <Link to={`/webdesign`}> <button href="#" class="arrow-buttonBlack">ПЕРЕЙТИ<img class="icon-arrow" src="images/arrowBlack.svg"></img></button></Link>
                </Col>
              </Row>
            </div>

            <div class="activity-block">
              <Row style={{alignItems:'flex-start'}}>
                <Col>
                   <p class="activity-title">Учебные проекты</p>
                </Col>
                <Col>
                  <img src="images/schoolprojectsIcon.svg"></img>
                </Col>
              </Row>
              <Row style={{alignItems:'flex-end'}}>
                <Col lg={9}>
                  <p class="activity-description">Вы можете ознакомиться с моими учебными проектами, которые охватывают широкий спектр областей...
                  </p>
                </Col>
                <Col lg={3}>
                <Link to={`/schoolprojects`}><button href="#" class="arrow-buttonBlack">ПЕРЕЙТИ<img class="icon-arrow" src="images/arrowBlack.svg"></img></button></Link>
                </Col>
              </Row>
            </div>

            <div class="activity-block">
              <Row style={{alignItems:'flex-start'}}>
                <Col>
                   <p class="activity-title">Графический дизайн</p>
                </Col>
                <Col>
                  <img src="images/graphicIcon.svg"></img>
                </Col>
              </Row>
              <Row style={{alignItems:'flex-end'}}>
                <Col lg={9}>
                  <p class="activity-description">Мои работы в области графического дизайна, включая создание уникального фирменного стиля, логотипов, иллюстраций...</p>
                </Col>
                <Col lg={3}>
                <Link to={`/graphic`}><button href="#" class="arrow-buttonBlack">ПЕРЕЙТИ<img class="icon-arrow" src="images/arrowBlack.svg"></img></button></Link>
                </Col>
              </Row>
            </div>

            <div class="activity-block">
              <Row style={{alignItems:'flex-start'}}>
                <Col>
                   <p class="activity-title">Фотография</p>
                </Col>
                <Col>
                  <img src="images/photographyIcon.svg"></img>
                </Col>
              </Row>
              <Row style={{alignItems:'flex-end'}}>
                <Col lg={9}>
                  <p class="activity-description">Работы в области фотографии, включая портреты, пейзажи и репортажи. Мое портфолио в фотографии представляет разнообразие стилей...</p>
                </Col>
                <Col lg={3}>
                <Link to={`/photography`}><button href="#" class="arrow-buttonBlack">ПЕРЕЙТИ<img class="icon-arrow" src="images/arrowBlack.svg"></img></button></Link>
                </Col>
              </Row>
            </div>
                        
          </div>
        </div>

        <div class="section">
          <div style={{marginBottom:'50px'}}>
            <div class="line"></div>
            <h1>ОБО МНЕ</h1>
          </div>

          <div style={{display:'flex', justifyContent:'space-around', minHeight:'400px'}}>
            <Row>
              <Col lg={5} style={{display: 'flex', alignItems: 'center'}}>
                <div class="myPhoto-block" style={{backgroundImage:'url(images/myphoto.jpg)', backgroundSize:'cover'}}></div>
              </Col>
            
              <Col lg={7} style={{display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                <Col lg={12}>
                  <p class="aboutme-text">Я молодой специалист в области информационных технологий. Заканчиваю обучение на младшего разработчика ПО, но уже работаю в IT год. Мой опыт включает в себя визуальный и графический дизайн, а также разработку веб-приложений. На своем сайте портфолио вы можете увидеть мои работы, которые отражают мой творческий подход и профессионализм. Буду рада сотрудничеству и новым вызовам!</p>
                </Col>
                <Col lg={12}>
                  <button class="downloadButton" onClick={handleDownload}>
                СКАЧАТЬ CV
                  </button>
                </Col>
                <Col lg={12}>
                  <div class="app-icons">
                    <div class="appIcon-block">
                      <img src="images/figmaIcon.svg"></img>
                      <p>Figma</p>
                    </div>
                    <div class="appIcon-block">
                      <img src="images/PsIcon.svg"></img>
                      <p>Photoshop</p>
                    </div>
                    <div class="appIcon-block">
                      <img src="images/AiIcon.svg"></img>
                      <p>Illustrator</p>
                    </div>
                    <div class="appIcon-block">
                      <img src="images/IdIcon.svg"></img>
                      <p>InDesign</p>
                    </div>
                  </div>
                </Col>
              </Col>
            </Row>
          </div>
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
  )
}
