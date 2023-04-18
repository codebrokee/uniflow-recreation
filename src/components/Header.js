export const Header = () => {

return (      
  <>
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
</section>
<section>
  <div className='hero-middle-section'>
    <div className='top-left-grid'>
      <h1>We will help you change your life</h1>
    </div>
    <div className='top-right-grid'>
      <p>Secure, own, and manage your personal and financial data with ease</p>
      <a href="#">Join now for free</a>

    </div>
    <div className="bottom-left-grid">
      <p>Tell us how we can help you!</p>
    </div>
    <div className='bottom-right-grid'>
      <Buttons text = 'I need help with my finances'/>
      <Buttons text = 'I was a victim of identity theft'/>
      <Buttons text = 'I want to store all assets in one place'/>
      <Buttons text = 'I am in debt'/>
      <Buttons text = 'I want to get paid for my data'/>
    </div>

  </div>
</section>
</>)
}

export default Header