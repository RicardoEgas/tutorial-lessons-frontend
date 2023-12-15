import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main'
import Detail from './components/Details'
import Reservation from './components/Reservations'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import ResetPassword from './components/auth/ResetPassword'
import SplashScreen from './components/splash-screen/SplashScreen'
import AddClassForm from './components/Classes'
import Home from './components/home/Home';

const App = () => {

  return (
    <>
      <Routes>

        <Route path="/" element={<SplashScreen />} />
        <Route path="/details/:id" element={<Detail/>}></Route>
        <Route path="/reservations" element={<Reservation/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/classes" element={<AddClassForm/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
    </>
  )
}

export default App;