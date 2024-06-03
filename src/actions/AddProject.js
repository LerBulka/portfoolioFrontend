import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

export default function AddProject() {
    const [categories, setCategory] = useState([]);
    const [subcategories, setSubcategory] = useState([]);
    

    useEffect(() => {
        const getCategory = async () => {
            const response = await axios.get(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/categories`);
            setCategory(response.data);
        };
        getCategory();

        const getSubcategory = async () => {
            const response = await axios.get(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/subcategories`);
            setSubcategory(response.data);
        };
        getSubcategory();
        
    }, []);

    const [title, setTitle] = React.useState('');
    const [subtitle, setSubtitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [categoryId, setCategoryId] = React.useState('');
    const [subcategoryId, setSubcategoryId] = React.useState('');
    const [file, setFile] = React.useState('');
    const [image, setImage] = React.useState('');
    const [projectUrl, setProjectUrl] = React.useState('');
    const [githubUrl, setGithubUrl] = React.useState('');
    const handleFileChange = (e) => {
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        };
        setImage(img);
        setFile(img.data.name);
    };

    const navigate = useNavigate();

    const saveProject = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/projects`, {
                title: title,
                subtitle: subtitle,
                description: description,
                category_id: categoryId,
                subcategory_id: subcategoryId,
                image_name: file,
                project_url: projectUrl, 
                github_url: githubUrl, 
            });
    
            let formData = new FormData();
            formData.append('file', image.data, image.data.name);
            const response = await fetch('https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/image', {
            method: 'POST',
            body: formData,
            });

            if (!response.ok) {
                throw new Error('Image upload failed');
            }
    
            navigate('/projecttable');
        } catch (error) {
            console.error('Error saving project:', error);
            navigate('/addproject');
        }
    };

    

    return (
        <Container style={{padding:'100px'}}>
            <Row>
                <Col>
                    <h2>Добавить новый проект</h2>
                    <div style={{maxWidth:'100%'}}>
                    <Form onSubmit={saveProject}>
                        <div style={{float:'left', marginRight:'100px', width:'50%'}}>
                        <Form.Group controlId="title">
                            <Form.Label style={{color:"black"}}>Название проекта</Form.Label>
                            <Form.Control type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="subtitle">
                            <Form.Label style={{color:"black"}}>Короткое описание проекта</Form.Label>
                            <Form.Control type="text" name="subtitle" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} required />
                        </Form.Group>
                        <Form.Group controlId="category">
                            <Form.Label style={{color:"black"}}>Категория проекта</Form.Label>
                            <Form.Control as="select" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                                <option key={0} value={0}>Select Category{' '}</option>
                                {categories.map(category => (
                                    <option key={category.category_id} value={category.category_id}>{category.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="subcategory">
                            <Form.Label style={{color:"black"}}>Подкатегория проекта</Form.Label>
                            <Form.Control as="select" value={subcategoryId} onChange={(e) => setSubcategoryId(e.target.value)} required>
                                    <option key={0} value={0}>Select Subcategory{' '}</option>
                                    {subcategories.map(subcategory => (
                                        <option key={subcategory.subcategory_id} value={subcategory.subcategory_id}>{subcategory.name}</option>
                                    ))}
                            </Form.Control>
                        </Form.Group>
                
                        <Form.Group controlId="description">
                            <Form.Label style={{color:"black"}}>Описание проекта</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                        </Form.Group>
                        </div>
                        <div>
                        <Form.Group controlId="projectUrl">
                            <Form.Label style={{color:"black"}}>URL готового проекта</Form.Label>
                            <Form.Control type="text" name="projectUrl" value={projectUrl} onChange={(e) => setProjectUrl(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="githubUrl">
                            <Form.Label style={{color:"black"}}>URL проекта на GitHub</Form.Label>
                            <Form.Control type="text" name="githubUrl" value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
                        </Form.Group>
                        
                        {image.preview && <img src={image.preview} width="100" height="100" alt="" />}
                        
                        <Form.Group controlId="image">
                            <Form.Label style={{color:"black"}}>Изображение проекта</Form.Label>
                            <Form.Control type="file" filename={file} onChange={handleFileChange} required/>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{backgroundColor:'green'}}>Добавить проект</Button>
                        </div>
                    </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
