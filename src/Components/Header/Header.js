import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'
import './header.css'
import { GiHamburgerMenu } from "react-icons/gi"
import{CgCloseO} from "react-icons/cg"

const Header = () => {
  const [open,setOpen]= useState(false);
    const hamburgerIcon =<div className='ham-menu'><GiHamburgerMenu className='hamburger' onClick={()=> setOpen(!open)}/></div>


    const closeIcon =<div className='ham-menu'><CgCloseO className='hamburger' onClick={()=> setOpen(!open)}/></div>
  
  return (
    <>
      <nav className='main-nav' >
        <div className='logo'>
          <h3><span>Foodieland</span><span className='dot'>.</span></h3>
        </div>
        <div className='menu-link'>
          <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#recipe'>Recipes</a></li>
          <li><a href='#blogs'>Blogs</a></li>
          <li><a>Contacts</a></li>
          <li><a href="/about">About us</a></li>
          </ul>
        </div>
        
        
        <div className='social-media'>
          <ul >
            <li>
              <a href='www.facebook.com' target="_blank"><FaFacebookF className='facebook'/></a>
            </li>
            <li>
              <a href='wwww.twitter.com' target="_blank"><FaTwitter className='twitter'/></a>
            </li>
            <li>
              <a href='www.instagram.com' target="_blank"><FaInstagram className='instagram'/></a>
            </li>
          </ul>
          
        </div>
       <div className='icon'>{open? closeIcon : hamburgerIcon }</div> 
      
      </nav>
      <hr className='hr'/>

      {open &&<div className='ham-rap'><div className='back-blur'></div><div className='menu-link-hamburger'>
          <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#recipe'>Recipes</a></li>
          <li><a href='#blogs'>Blogs</a></li>
          <li><a>Contacts</a></li>
          <li><a href='/about'>About us</a></li>
          </ul>
        </div>
        </div>
      }
    </>
    
  )
}

export default Header
