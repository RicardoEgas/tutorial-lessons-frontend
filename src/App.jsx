// import { Routes, Route} from 'react-router-dom'
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Detail from './components/Details'
// import Reservation from './components/Reservations'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
// import ResetPassword from './components/auth/ResetPassword'
import SplashScreen from './components/splash-screen/SplashScreen'
import AddClassForm from './components/Classes'
// import Home from './components/home/Home';
// import Layout from './components/auth/Layout';
// import Main from './pages/Main';
// import Detail from './pages/Details';
// import Reservation from './components/Reservations';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
import Reservations from './pages/Reservations';
import ReserveTutorial from './components/reservations/ReserveTutorial';
// import ResetPassword from './components/auth/ResetPassword';
// import SplashScreen from './components/splash-screen/SplashScreen';
import AddTutorial from './pages/AddTutorial';
import TutorialDetail from './components/tutorials/TutorialDetail';
import Tutorials from './pages/tutorials';
import Home from './pages/Homepage';
import DeleteClass from './pages/Delete';


const App = () => {

  return (
    <>
      <Routes>
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="tutorial/:id" element={<TutorialDetail />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="new" element={<AddTutorial />} />
          <Route path="reserve/:tutorialId" element={<ReserveTutorial />} />
          <Route path="/delete" element={<DeleteClass/>}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<SplashScreen />} />
          <Route path="/details/:id" element={<Detail/>}></Route>
          <Route path="/classes" element={<AddClassForm/>}></Route>
      </Routes>
    </>
  );
}

export default App;
