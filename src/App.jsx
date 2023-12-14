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

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const hideSplash = () => {
    setShowSplash(false);
  }

  return (
    <>
      {showSplash && <SplashScreen />}
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/details/:id" element={<Detail/>}></Route>
        <Route path="/reservations" element={<Reservation/>}></Route>
        <Route path="/login" element={<Login hideSplash={hideSplash} />} />
        <Route path="/signup" element={<Signup hideSplash={hideSplash} />} />
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/classes" element={<AddClassForm/>}></Route>
      </Routes>
    </>
  )
}

export default App;