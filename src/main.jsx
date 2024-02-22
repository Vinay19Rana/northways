import React from 'react'
import ReactDOM from 'react-dom/client'
import { IoLogoWhatsapp } from "react-icons/io";

import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import Layout from './components/Layout';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound';
import About from './components/About/About';
import SmoothScroll from './components/utils/SmoothScroll';
import ServicesPage from './components/Services/ServicesPage';
import Study from './components/Study/Study';
import { phone } from './Constants';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<ServicesPage />} />
      <Route path="study" element={<Study />} />
    </Route>
  )
);
const openWhatsApp = () => {
  window.open(`https://wa.me/91${phone}`, '_blank');
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScroll>
      <RouterProvider router={router} />
    </SmoothScroll>
    <IoLogoWhatsapp onClick={openWhatsApp} className='fixed bottom-[25px] right-7  text-green-700  text-6xl' />

  </React.StrictMode>,
)
