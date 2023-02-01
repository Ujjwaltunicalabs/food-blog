import React, { useEffect, useState } from 'react'
import './About_us.css'
const About_us = () => {
  const[posts,setPosts]=useState([]);
  useEffect(()=>{
    fetch("https://foodieland-api.onrender.com/about")
    .then((response) => response.json())
    .then((data) => setPosts(data));
  },[]);
  return (
    <div className='about_us'>{
      posts.map((elem)=>{
        const {bannerImg, content, createdAt} =elem;
        return(
          <>
            <div className='about'>
            <img src={bannerImg} alt='photu'/>
            <p>{content}</p>

            </div>
          </>
        )
      })
    }
     

    </div>
  )
}

export default About_us
