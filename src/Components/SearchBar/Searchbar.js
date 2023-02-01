import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import './searchbar.css';
const Searchbar = () => {
  const [loading, setLoading]= useState(false);
  const [posts, setPosts] = useState([]);
  const [keyword, setSearchTitle] = useState("");

   console.log(keyword);

   
    const loadPosts=async(event)=>{
      try{
        event.preventDefault();
      setLoading(true);
        await fetch(`https://foodieland-api.onrender.com/search?q=${keyword}`)
        // await fetch(`https://onmyscreen.onrender.com/blogs/search?q=${keyword}`)
      .then((response) => response.json())
      .then((data) =>{setPosts(data);
      });
      // const resdata = await res.json();
      // console.log(resdata);

      // setPosts(resdata.data);
      setLoading(false);
      // console.log(res.data)
      } catch(error){
        console.log(error);
      }
    };
  
   
    
  return (
    <>''
    <div className='sb'>
    <div className='searchbar'>
      <form className='search-form'  onSubmit={loadPosts} >
        <input className='bar' type="text" 
        placeholder='Search article, news or recipe...' 
        onChange={(e)=>setSearchTitle(e.target.value)}
        
        />
      
        <button className='button' type="submit" 
        // onClick={setSearchTitle('')}
        >Search </button> 
      </form>
      </div>
      <div className='se-box'>
      {posts.map((item)=>{
      // const {title}=item;
      return(
        <div className='search-box'>
          <Link to={`blog/${item?.id}`}><h5>{item?.title}</h5></Link>
        
        </div>
        
      )
    }
    )}
    </div>
    </div >
    
    </>
  )
}

export default Searchbar
