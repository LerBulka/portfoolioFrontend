import React, { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import SubcategoryTabs from '../components/SubcategoryTabs';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


export default function Webdesign() {
  const categoryId = 1;

  const [category, setCategory] = useState({});

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/categories/${categoryId}`);
        setCategory(response.data);
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    fetchCategory();
  }, [categoryId]);

  return (
    <div>
      <Container fluid style={{backgroundColor:"rgba(30, 30, 30, 1)", display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div style={{position:"absolute", zIndex:"0", maxWidth:'100%', right:'1px', top:'70px', width:'100%', opacity:'50%'}}><img src="images/linesPatternDark.png" style={{width:'100%'}}></img></div>

        <div class="portfolio-container" style={{width:'1123px', marginTop:'100px', paddingBottom:'100px', zIndex:'1'}}>
        
        <Breadcrumb>
          <Breadcrumb.Item href="/" style={{color:'white'}}>Главная</Breadcrumb.Item>
          
          <Breadcrumb.Item active style={{color:'white'}}>Веб-дизайн</Breadcrumb.Item>
        </Breadcrumb>

        <div class="line"></div>
        <h1 class="category_name">{category.name}</h1>
        <p class="category_description" style={{ color: 'white'}}>{category.description}</p>
        <SubcategoryTabs categoryId={categoryId} />
        </div>
      </Container>

      <Container>

        <div class="section">

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
                  <p class="activity-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditat</p>
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
                  <p class="activity-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditat</p>
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
                  <p class="activity-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditat</p>
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
                  <p class="activity-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquid ad provident aut fuga animi soluta quae eos non cupiditat</p>
                </Col>
                <Col lg={3}>
                <Link to={`/photography`}><button href="#" class="arrow-buttonBlack">ПЕРЕЙТИ<img class="icon-arrow" src="images/arrowBlack.svg"></img></button></Link>
                </Col>
              </Row>
            </div>
                        
          </div>
        </div>

        <div style={{marginBottom:'50px', marginTop:'100px'}}>
            <div class="line"></div>
            <h1>СВЯЖИТЕСЬ СО МНОЙ</h1>
          </div>

      </Container>

      <ContactForm></ContactForm>

    </div>
  )
}