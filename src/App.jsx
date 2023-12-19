import { Provider } from 'react-redux';
import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/auth/Layout';
// import Main from './pages/Main';
// import Detail from './pages/Details';
// import Reservation from './components/Reservations';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Reservations from './pages/Reservations';
import ReserveTutorial from './components/reservations/ReserveTutorial';
import ResetPassword from './components/auth/ResetPassword';
import SplashScreen from './components/splash-screen/SplashScreen';
import store from './redux/store';
import AddTutorial from './pages/AddTutorial';
import TutorialDetail from './components/tutorials/TutorialDetail';
import Tutorials from './pages/tutorials';
import DeleteTutorials from './pages/DeleteTutorials';
import Home from './pages/Homepage';
import ProtectedRoutes from './components/auth/protetedRoutes';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const hideSplash = () => {
    setShowSplash(false);
  }

  return (
    <>
      <Provider store={store}>
        {showSplash && <SplashScreen />}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/" element={
            <ProtectedRoutes>
              <Layout />
            </ProtectedRoutes>} > 
            </Route> */}
            <Route path="/tutorials" element={<Tutorials />} />
            {/* <Route index element={<Tutorials />} /> */}
             <Route path="tutorial/:id" element={<TutorialDetail />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="create" element={<AddTutorial />} />
            <Route path="reserve/:tutorialId" element={<ReserveTutorial />} />
            <Route path="/tutorials/delete" element={<DeleteTutorials />} />
            {/* </Route> */}
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<Signup hideSplash={hideSplash} />} />
          <Route path="/login" element={<Login hideSplash={hideSplash} />} />
          <Route path="/reset-password" element={<ResetPassword />} /> 
          {/* Fallback route for non-existent routes */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Provider>
    </>
  );
}

export default App;
