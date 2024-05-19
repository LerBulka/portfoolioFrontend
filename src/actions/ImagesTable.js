import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const ImagesTable = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/gallery');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/gallery/${id}`);
      setImages(images.filter((image) => image.image_id !== id));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  return (
    <Container className="mt-1" style={{minHeight:'600px'}}>
        <h2 className="text-center mt-3">Управление галереей изображений</h2>
        <p className="text-end">
            <Link to="/addimage">
              <Button variant="primary" size="sm">Добавить новый</Button>
            </Link>
          </p>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Project ID</th>
          <th>Image URL</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {images.map((image) => (
          <tr key={image.image_id}>
            <td>{image.image_id}</td>
            <td>{image.description}</td>
            <td>{image.project_id}</td>
            <td>{image.image_url}</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(image.image_id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  );
};

export default ImagesTable;
