import React from 'react';

import Header from './Components/Header';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import About from './Pages/About';
import AdminDashboard from './Dashboard/AdminDashboard';
import Contact from './Pages/Contact';
import Login from  './Pages/Login';

import { BrowserRouter as Router, Routes, Route,useLocation } from 'react-router-dom';
import Signup from './Pages/Signup.jsx';

const Layout=() =>{
  const location = useLocation();
  const hide = ['/login','/signup','/admindashboard','/signup'];

  const hideLayout = hide.includes(location.pathname)
      return(
        <>
        
          {!hideLayout && <Header />}
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/admindashboard'element={<AdminDashboard/>} />
            <Route path='/signup' element={<Signup/>} />

          </Routes>
          {!hideLayout && <Footer />}
        
        </>
      )

}

const App = () => {
  return (
   <div>
     <Router>
       <Layout />
     </Router>
    </div>
  )
}
export default App
