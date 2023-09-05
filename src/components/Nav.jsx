import React from 'react'
import Logo from '../assets/images/logo.svg'
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
      
      <div className="nav-content">
        <ul className='list-styled'>
          <li>
            <a href='https://en.wikipedia.org/wiki/Steve_Jobs' target='_blank'><img id='nav_logo' src={Logo} alt="Apple" /></a>
          </li>

          <li>
            <a href="" className='link-styled'>Store</a>
          </li>

          <li>
            <a href="" className='link-styled'>Mac</a>
          </li>

          <li>
            <a href="" className='link-styled'>iPad</a>
          </li>

          <li>
            <a href="" className='link-styled'>iPhone</a>
          </li>

          <li>
            <a href="" className='link-styled'>Watch</a>
          </li>

          <li>
            <a href="" className='link-styled'>AirPods</a>
          </li>

          <li>
            <a href="" className='link-styled'>TV & Home</a>
          </li>

          <li>
            <a href="" className='link-styled'>Entertainment</a>
          </li>

          <li>
            <a href="" className='link-styled'>Accessories</a>
          </li>

          <li>
            <a href="" className='link-styled'>Support</a>
          </li>

          <li>
            <a href=""className='link-styled'>Contact</a>
          </li>

          <li>
            <a href=""><img src={Search} alt="Search" /></a>
          </li>

          <li>
            <a href=""><img src={Store} alt="Store" /></a>
          </li>
        </ul>
      </div>

    </nav>
  )
}

export default Nav