import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="Home-form-container">
      <form className="form-container">
        <img
          src="https://i.postimg.cc/6Q8s8274/Group-46.png"
          className="main-logo"
        />
        <img
          src="https://i.postimg.cc/7L6p85r6/moptro-logo.png"
          className="Home-website-logo-desktop-image"
          alt="website logo"
        />
        <button className="middle">Employee Productivivty Dashboard</button>

        <div className="middle-part">
          <p className="p1">Productivity on Monday 4% </p>
          <button className="b1">4%</button>

          <p className="p2">Productivity on Tuesday </p>
          <button className="b2">92%</button>

          <p className="p3">Productivity on Wednesday </p>
          <button className="b3">122%</button>

          <p className="p4">Productivity on Thursday </p>
          <button className="b4">93%</button>

          <p className="p5">Productivity on Friday </p>
          <button className="b5">89%</button>

          <p className="p6">Productivity on Saturday </p>
          <button className="b6">98%</button>
        </div>
        <div className="icon-container">
          <div className="home-icon">
            <button className="home">
              <img
                src="https://i.postimg.cc/nh0CcpnX/Whats-App-Image-2024-03-18-at-17-44-47-c7678100-home-removebg-preview.png"
                alt="Home 1"
              />
            </button>
          </div>
          <div className="user-icon">
            <Link to="/products">
              <button className="home1">
                <img
                  src="https://i.postimg.cc/VsxZs0RV/Whats-App-Image-2024-03-18-at-17-47-08-1077c51d-removebg-preview.png"
                  alt="Home 2"
                />
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  </>
)

export default Home
