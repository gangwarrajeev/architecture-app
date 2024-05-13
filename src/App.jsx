import React from "react";
import {useRouterHistory} from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Awards from './components/Awards';
import People from './components/People';
import Media from './components/Media';
import Carrer from './components/Carrer';
import Contact from './components/Contact';
import Interiors from './components/Interiors';
import Architecture from './components/Architecture';
import Projectmanagement from './components/Management';
import Philosphy from './components/Philosphy';
import ProjectsDetails from './components/ProjectsDetails';

// const appHistory = useRouterHistory(createHistory)({
//   basename:'/myapp/build'
// });
function App() {
  return (
    <Router basename="/myapp/build">
      <Navbar />  
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route path="/People" element={<People />} />
        <Route path="/Philosphy" element={<Philosphy />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/media" element={<Media />} />
        <Route path="/carrer" element={<Carrer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/interiors" element={<Interiors />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/projectmanagement" element={<Projectmanagement />} />
        <Route path="/ProjectDetails" element={<ProjectsDetails />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;