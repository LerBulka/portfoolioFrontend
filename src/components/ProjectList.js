import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';

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
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, [subcategoryId, categoryId]);

  return (
    <div>
      {projects.map(project => (
        <div class="project-block" key={project.project_id}>
          <Row>
            <Col style={{padding:'0'}}>
              <img src={`/images/${project.image_name}`} alt={project.title} style={{maxWidth:'550px', height:'400px'}} />
            </Col>
            <Col style={{padding:'50px', backgroundColor:'rgba(107, 174, 255, 0.2)'}}>
              <h3 style={{color:"white"}}>{project.title}</h3>
              <p class="white-text" style={{fontSize:'20px'}}>{project.subtitle}</p>
              <p class="white-text">{project.description}</p>
              <p className="white-text">{project.category.name} | {project.subcategory.name}</p>

              <Link to={`/project/${project.project_id}`}>
                <button class="arrow-buttonWhite">
                СМОТРЕТЬ ПРОЕКТ
                <img class="icon-arrow" src="images/arrowWhite.svg"></img>
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
