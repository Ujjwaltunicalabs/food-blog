import React from 'react'
import './footer.css'
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
    <div className='main-footer'>
        
        <div className='footer-logo'>
          <h3><span>Foodieland</span><span className='dot'>.</span></h3>
          <span className='f'>Lorem ipsum dolor sit amet, consectetuipisicing elit,</span>
        </div>
        {/* <div className='menu-link'> */}
        <div className='footer-menu'>
          <ul>
          <li><a href='#recipe'>Recipes</a></li>
          <li><a href='#blogs'>Blogs</a></li>
          <li>Contacts</li>
          <li><a href='/about'>About us</a></li>
          </ul>
        </div>
        </div>
        <br/>
        <br/>
        <hr />
        <div className='lower-footer'>
            <span className='copy'>&copy;{new Date().getFullYear()} Flowbase. Powered by <span className='webflow'>Webflow</span></span>
            <div className='social-media-footer'>
          <ul >
            <li>
              <a href='' target="_blank"><FaFacebookF className='facebook'/></a>
            </li>
            <li>
              <a href='' target="_blank"><FaTwitter className='twitter'/></a>
            </li>
            <li>
              <a href='' target="_blank"><FaInstagram className='instagram'/></a>
            </li>
          </ul>
        </div>
        </div>

    </footer>
    
  )
}

export default Footer
