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
        setSubcategories(response.data);
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      }
    };

    fetchSubcategories();
  }, [categoryId]);

  return (
    <Tabs style={{marginTop:'50px'}} defaultActiveKey="all" id="subcategory-tabs">
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