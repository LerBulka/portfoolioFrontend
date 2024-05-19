import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Webdesign from '../pages/Webdesign';
import Schoolprojects from '../pages/Schoolprojects';
import Graphic from '../pages/Graphic';
import Contact from '../pages/Contact';
import Project from '../pages/Project';

import AdminLogin from '../components/AdminLogin';
import ProjectTable from '../actions/ProjectTable';
import AddProject from '../actions/AddProject';
import ImagesTable from '../actions/ImagesTable';
import AddImage from '../actions/AddImage';

export default function Content() {
  return (
    <main>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route exact path="/webdesign" element={<Webdesign />} />
                <Route exact path="/schoolprojects" element={<Schoolprojects />} />
                <Route exact path="/graphic" element={<Graphic />} />
                <Route path="/project/:id" element={<Project />} />

                <Route exact path="/projecttable" element={<ProjectTable />} />
                <Route path="/addproject" element={<AddProject />} />
                <Route exact path="/imagestable" element={<ImagesTable />} />
                <Route path="/addimage" element={<AddImage />} />


                <Route exact path="/contacts" element={<Contact />} />

                <Route path="/adminlogin" element={<AdminLogin />} />

            </Routes>
        </Router>
    </main>
  )
}
