import React, { Suspense } from 'react';

import Home from '../pages/homePage';
import ServicesPage from '../pages/servicePage';
import { Route, Routes } from 'react-router-dom';
import About from '../componnents/About';
import AboutPage from '../pages/about';

export default function Router() {

  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage/>} />
    
    </Routes>
    
  );
}
