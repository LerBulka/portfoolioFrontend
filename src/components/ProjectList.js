import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

const ProjectList = ({ subcategoryId, categoryId }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let url = 'https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/projects';
        if (subcategoryId !== 'all') {
          url += `/subcategory/${subcategoryId}`;
        } else {
          url += `/category/${categoryId}/all`;
        }
        const response = await axios.get(url);
        console.log('Response data:', response.data); // Отладочная информация
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]); // Установите пустой массив в случае ошибки
      }
    };

    fetchProjects();
  }, [subcategoryId, categoryId]);

  // Дополнительные проверки для отладки
  if (!Array.isArray(projects)) {
    console.error('Projects is not an array:', projects);
    return <div>Error: Projects data is invalid.</div>;
  }

  return (
    <div>
      {projects.map(project => (
        <div className="project-block" key={project.project_id}>
          <Row>
            <Col style={{ padding: '0' }}>
              <img src={`/images/${project.image_name}`} alt={project.title} style={{ maxWidth: '550px', height: '400px' }} />
            </Col>
            <Col style={{ padding: '50px', backgroundColor: 'rgba(107, 174, 255, 0.2)' }}>
              <h3 style={{ color: "white" }}>{project.title}</h3>
              <p className="white-text" style={{ fontSize: '20px' }}>{project.subtitle}</p>
              <p className="white-text">{project.description}</p>
              <p className="white-text">{project.category.name} | {project.subcategory.name}</p>

              <Link to={`/project/${project.project_id}`}>
                <button className="arrow-buttonWhite">
                  СМОТРЕТЬ ПРОЕКТ
                  <img className="icon-arrow" src="images/arrowWhite.svg" alt="arrow icon" />
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
