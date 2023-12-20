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
import { Provider } from 'react-redux';
// import Layout from './components/auth/Layout';
// import Main from './pages/Main';
// import Detail from './pages/Details';
import ReservationForm from './components/ReservationForm';
// import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
import Reservations from './pages/Reservations';
import ReserveTutorial from './components/reservations/ReserveTutorial';
// import ResetPassword from './components/auth/ResetPassword';
// import SplashScreen from './components/splash-screen/SplashScreen';
import AddTutorial from './pages/AddTutorial';
import TutorialDetail from './components/tutorials/TutorialDetail';
import Tutorials from './pages/tutorials';
import DeleteTutorials from './pages/DeleteTutorials';
import Home from './pages/Homepage';
import Navbar from './pages/Navbar';
import DeleteClass from './pages/Delete';


const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="tutorial/:id" element={<TutorialDetail />} />
          <Route path="/myreservations" element={<Reservations />} />
          <Route path="reserve/:tutorialId" element={<ReserveTutorial />} />
          <Route path="/reservationform" element={<ReservationForm />} />
          <Route path="/delete" element={<DeleteClass />} />
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
