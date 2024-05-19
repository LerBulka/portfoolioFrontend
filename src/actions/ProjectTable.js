import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import axios from 'axios';


export default function ProjectTable() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await axios.get('https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/projects');
    setProjects(response.data);
  };

  const deleteProject = async (id) => {
    if (window.confirm('Delete record #' + id + ' ?')) {
      await axios.delete(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/projects/${id}`);
      getProjects();
    }
  };


  return (
    <Container className="mt-1" style={{minHeight:'600px'}}>
      <h2 className="text-center mt-3">Управление проектами</h2>
      <Row>
        <Col md={{span:9, offset:2}}>
          <p className="text-end">
            <Link to="/addproject">
              <Button variant="primary" size="sm">Добавить новый</Button>
            </Link>
          </p>
          <Table striped>
            <thead>
              <tr>
                <th>N#</th>
                <th>Название</th>
                <th>Категория</th>
                <th>Подкатегория</th>
                <th>Дата публикации</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <td>{index + 1}. #{project.id}</td>
                  <td>{project.title}</td>
                  <td>{project.category.name}</td>
                  <td>{project.subcategory.name}</td>
                  <td>{project.createdAt}</td>
                  <td>
                    <Link to={`/project/${project.project_id}`}>
                      <Button variant="success" style={{marginRight:'10px'}}>Смотреть</Button>
                    </Link>
                    <Button onClick={() => deleteProject(project.project_id)} variant="danger">Удалить</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

      </Row>

    </Container>
  )
}
