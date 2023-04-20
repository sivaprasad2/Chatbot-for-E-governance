import React from 'react'
import Navbar from './components/NavBar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EssentialLinks from './components/EssentialLinks/EssentialLinks'
import Schemes from './components/Schemes/Schemes'
import AboutUs from './components/Aboutus/AboutUs'
import Home from './components/Home/Home'
import ContactUs from './components/Contactus/ContactUs';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
      <div>
        <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/links' element={ <EssentialLinks/> } />
        <Route path='/schemes' element={ <Schemes/> } />
        <Route path='/aboutus' element={ <AboutUs/> } />
        <Route path='/contact' element={ <ContactUs/> } />

        </Routes> 

      </div>
      <Footer/>
      
    </Router>
    </div>
  )
}

export default App