import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const AddImage = () => {
  const [description, setDescription] = useState('');
  const [projectId, setProjectId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/gallery', {
        description,
        project_id: projectId,
        image_url: imageUrl,
      });
      // Очищаем поля после успешной отправки
      setDescription('');
      setProjectId('');
      setImageUrl('');
      
    } catch (error) {
      console.error('Error adding image:', error);
    }
  };

  return (
    <Container style={{padding:'100px'}}>
        <h2>Добавить изображения к проекту</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="description">
        <Form.Label style={{color:'black'}}>Название</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group controlId="projectId">
        <Form.Label style={{color:'black'}}>Проект</Form.Label>
        <Form.Control as="select" value={projectId} onChange={(e) => setProjectId(e.target.value)} required>
          <option value="">Select Project</option>
          {projects.map((project) => (
            <option key={project.project_id} value={project.project_id}>{project.title}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="imageUrl">
        <Form.Label style={{color:'black'}}>URL изображения</Form.Label>
        <Form.Control type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
      </Form.Group>
      <Button variant="primary" type="submit" style={{backgroundColor:'green'}}>Add Image</Button>
    </Form>
    </Container>
  );
};

export default AddImage;
