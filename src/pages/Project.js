import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Project() {
    const [project, setProject] = useState('');
    const [images, setImages] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      const fetchData = async () => {
          try {
              // Запрос на получение данных о проекте
              const projectResponse = await axios.get(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/projects/${id}`);
              setProject(projectResponse.data);
              
              // Запрос на получение изображений для проекта
              const imagesResponse = await axios.get(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/gallery/${id}`);
              console.log(imagesResponse.data);
              setImages(imagesResponse.data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchData();
  }, [id]);

    const goBack = () => {
        window.history.back(); // Назад через объект window.history
    };

    const handleImageClick = (imageUrl) => {
      window.open(imageUrl, '_blank'); // Открывает изображение в новой вкладке
      // или используйте вашу логику для открытия изображения в модальном окне
    };

  return (
    <div>
        <Container fluid style={{backgroundColor:"rgba(30, 30, 30, 1)", display:'flex', justifyContent:'center'}}>
        <div class="portfolio-container" style={{width:'1123px', marginTop:'100px', paddingBottom:'100px'}}>

        <Breadcrumb>
          <Breadcrumb.Item href="/" style={{color:'white'}}>Главная</Breadcrumb.Item>

          <Breadcrumb.Item onClick={goBack} style={{color:'white'}}>Назад</Breadcrumb.Item>
          
          <Breadcrumb.Item active style={{color:'white'}}>{project.title}</Breadcrumb.Item>
        </Breadcrumb>

        <div class="line"></div>
        <h1 style={{color:'white', marginBottom:'50px'}}>Проект - {project.title}</h1>
        <Row>
          <Col>
          <img src={`/images/${project.image_name}`} alt={project.title} style={{maxWidth:'550px'}} />
          </Col>
          <Col>
            <h3 style={{color:'white'}}>{project.title}</h3>
            <p class='white-text'>{project.subtitle}</p>
            <p class='white-text'>{project.description}</p>
            <p className="white-text"> {project.category && project.category.name} | {project.subcategory && project.subcategory.name}</p>
            {project.project_url && (
              <button style={{marginBottom:'50px', marginTop:'50px'}} class="arrow-buttonWhite">
                <a style={{color:'white' }}target="_blank" href={project.project_url}>СМОТРЕТЬ САЙТ</a>
              </button>
            )}
            
          </Col>
        </Row>
        
        <Row style={{marginTop:'50px'}}>
          {images.map(image => (
            <Col key={image.image_id} onClick={() => handleImageClick(image.image_url)}>
              <img src={image.image_url} alt={image.description} style={{ maxWidth: '100%', marginTop: '20px' }} />
            </Col>
          ))}
        </Row>
        </div>
        </Container>
      
    </div>
  )
}
