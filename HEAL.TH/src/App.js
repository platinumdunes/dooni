import React from 'react'
import Navbar from './components/Navbarr'
import { Route, Routes } from 'react-router-dom'
import HealthConditions from './pages/HealthConditions'
import SelfDiagnosis from './pages/SelfDiagnosis'
import Hospitals from './pages/Hospitals'
import FAQs from './pages/FAQs'
import About from './pages/About'
import Login from './pages/Login'
import GCDoctors from './pages/hospitalPages/GCDoctors'
import NoPageFound from './pages/NoPageFound'
import Home_page from './pages/MainPage'
import Switch_page from './pages/switch_page'
import Footer from './components/Footer'
import ViewAccount from './pages/ViewAccount'
import PMSHDoctors from './pages/hospitalPages/PMSHDoctors'
import RosarioDoctors from './pages/hospitalPages/RosarioDoctors'
import DiosdadoDoctors from './pages/hospitalPages/DiosdadoDoctors'
import Signup from './pages/Signup'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Switch_page />} />
        <Route index element={<Home_page/>} />
        <Route path='/health-conditions' element={<HealthConditions />} />
        <Route path='/self-diagnosis' element={<SelfDiagnosis />} />
        <Route path='/hospitals' element={<Hospitals />} />
        <Route path='/hospitals/greencity-doctors' element={<GCDoctors />} />
        <Route path='/hospitals/pmsh-doctors' element={<PMSHDoctors />} />
        <Route path='/hospitals/rosario-doctors' element={<RosarioDoctors />} />
        <Route path='/hospitals/diosdado-doctors' element={<DiosdadoDoctors />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} ></Route>
        <Route path='/view-account' element={<ViewAccount/>}/>
        <Route path='*' element={<NoPageFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
