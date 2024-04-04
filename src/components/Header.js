import tkdBadge from '../img/KD-Badge.png';

function Header() {
  return (
    <header className='header'>
      <div className='image-box'>
        <img src={tkdBadge} alt='KD-Badge' />
      </div>
      <div className='navigation'>
        <span className='menu-text'>Home</span>
        <span className='menu-text'>About Us</span>
        <span className='menu-text'>Contact Us</span>
        <span className='menu-text'>Shop</span>
        <span className='menu-text'>Team</span>
      </div>
      <div className='empty-box'></div>
    </header>
  );
}

export default Header;
