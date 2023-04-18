import './App.css';
import logo from './assets/logo.5bb96173.svg';
import burger from './assets/hamburger.c2bec8e8.svg';
import bg from './assets/landing_page_personal_corner_decoration.13b0758c.png';
import Buttons from './components/Buttons';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">


      <section className='top-landing-section'>
        
        <div className='nav-div'>
          <img src={logo} alt="logo" className='hero-logo' />
          <div className='nav-container-items'>
            <a href="">Personal</a>
            <a href="">Business</a>
            <img src={burger} alt="hamburger menu" className='hamburgerMenu' />
          </div>
        </div>

        <div>
          <img className='bg-img' src={bg} alt="background shadow" />
        </div>

        <section>
          <div className='hero-middle-section'>
            <div className='top-left-grid'>
              <h1 className='hero-main-text'>We will help you change your life</h1>
              <p className='hero-sub-text'>Secure, own, and manage your personal and financial data with ease</p>
              <button>Join now for free</button>
            </div>
            <div className='bottom-left-grid'>
              <div className='right-hero-text'>
                <p>Tell us how we can help you!</p>
              </div>
              <div className='bottom-right-grid'>
                <Buttons text='I need help with my finances' />
                <Buttons text='I was a victim of identity theft' />
                <Buttons text='I want to store all assets in one place' />
                <Buttons text='I am in debt' />
                <Buttons text='I want to get paid for my data' />
              </div>
            </div>

          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
