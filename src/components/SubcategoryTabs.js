import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import ProjectList from './ProjectList';

const SubcategoryTabs = ({ categoryId }) => {
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get(`https://portfoolio-deploy-7b060a1c6acd.herokuapp.com/subcategories/category/${categoryId}`);
        console.log('Response data:', response.data); // Отладочная информация
        // Убедитесь, что response.data является массивом
        if (Array.isArray(response.data)) {
          setSubcategories(response.data);
        } else {
          console.error('Error: Response data is not an array', response.data);
          setSubcategories([]);
        }
      } catch (error) {
        console.error('Error fetching subcategories:', error);
        setSubcategories([]); // Установите пустой массив в случае ошибки
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  // Дополнительные проверки для отладки
  if (!Array.isArray(subcategories)) {
    console.error('Subcategories is not an array:', subcategories);
    return <div>Error: Subcategories data is invalid.</div>;
  }

  return (
    <Tabs style={{ marginTop: '50px' }} defaultActiveKey="all" id="subcategory-tabs">
      <Tab eventKey="all" title="Все работы">
        <ProjectList categoryId={categoryId} subcategoryId="all" />
      </Tab>
      {subcategories.map(subcategory => (
        <Tab key={subcategory.subcategory_id} eventKey={subcategory.subcategory_id} title={subcategory.name}>
          <ProjectList subcategoryId={subcategory.subcategory_id} />
        </Tab>
      ))}
    </Tabs>
  );
};

export default SubcategoryTabs;
