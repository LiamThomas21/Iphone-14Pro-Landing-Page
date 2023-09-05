import React from 'react'

const SoundSection = () => {
  
  const handleLearnMore = () => {
    const element = document.querySelector('.display-section');
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className='sound-section wrapper'>
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">Even Better Sound</h2>
          <p className="text">Feel the base.</p>
          <span className="description">
          From R1299,99 pm for 24 mo. or R26 999.99 before trade-in
          </span>

          <ul className="links">
            <li>
              <button className="button">Buy</button>
            </li>

            <li>
              <a className="link" onClick={handleLearnMore}>Learn more</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection