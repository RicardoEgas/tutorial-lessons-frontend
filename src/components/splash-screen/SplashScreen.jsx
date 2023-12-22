import { Link } from 'react-router-dom';
import './splash.css';

function SplashScreen() {
  return (
    <section id="banner">
      <div className="banner-text">
          <h1>Welcome</h1>
          <p>Get to know us better by enrolling with us</p>
          <div className="banner-btn">
              <Link to={'/login'}><span></span>Login</Link>
              <Link to={'/signup'}><span></span>Register</Link>
          </div>
      </div>
    </section>
  )
}

export default SplashScreen