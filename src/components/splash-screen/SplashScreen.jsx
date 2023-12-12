import './splash.css'

function SplashScreen() {
  return (
    <section id="banner">
      <div className="banner-text">
          <h1>Welcome</h1>
          <p>Get to know us better by enrolling with us</p>
          <div className="banner-btn">
              <a href="#"><span></span>Home</a>
              <a href="#"><span></span>Tutors</a>
          </div>
      </div>
    </section>
  )
}

export default SplashScreen