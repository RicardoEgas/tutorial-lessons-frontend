import { Routes, Route } from 'react-router-dom';
import Detail from './components/Details'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import SplashScreen from './components/splash-screen/SplashScreen'
import AddClassForm from './components/Classes'
import ReservationForm from './components/ReservationForm';
import Reservations from './pages/Reservations';
import ReserveTutorial from './components/reservations/ReserveTutorial';
import TutorialDetail from './components/tutorials/TutorialDetail';
import Tutorials from './pages/tutorials';
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
