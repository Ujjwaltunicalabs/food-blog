import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "./SingleBlog.css"
import "./Subscribe/Subscribe"
import Subscribe from './Subscribe/Subscribe'
import profilepic1 from '../images/Blog_profile_pic.png'
import img2 from '../images/Full_image.png'
import img3 from '../images/Single_image.png'
import {FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'
import{RiTimerFill} from 'react-icons/ri'
import ri1 from '../images/ri1.png'
import ri2 from '../images/ri2.png'
import ri3 from '../images/ri3.png'
import ri4 from '../images/ri4.png'




const Singleblog = () => {

  const { id } = useParams();
 
  // useEffect(()=>{
  //   fetch('')
  // })



  const QA=[{
    question:"How did you start out in the food industry?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
  },
  {
    question:"What do you like most about your job?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
  },
  {
    question:"Do you cook at home on your days off?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
  },
  {
    question:"What would your advice be to young people looking to get their foot in the door?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
  },
  {
    question:"What is the biggest misconception that people have about being a professional chef?",
    answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar. Fusce id mollis ex. Praesent feugiat elementum ex ut suscipit."
  }
]
const recipe=[
  {
    img:ri1,
    title:"Mixed Tropical Fruit Salad with Superfood Boosts "
  },
  {
    img:ri2,
    title:"Big and Juicy Wagyu Beef Cheeseburger"
  },
  {
    img:ri3,
    title:"Healthy Japanese Fried Rice with Asparagus"
  },
  {
    img:ri4,
    title:"Cauliflower Walnut Vegetarian Taco Meat"
  }]
  const [loading,setLoading]= useState(false);
  const [posts,setPosts] =useState([]);
  const [data,setData] = useState([]);
  const apiData = async () => {
    setLoading(true);
    await axios
      .get(`https://foodieland-api.onrender.com/blog/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    };
      const fetchPost=async()=>{
        setLoading(true);
        fetch("https://foodieland-api.onrender.com/questions/")
        .then((response) => response.json())
        .then((data) => setPosts(data));
        setLoading(false);
    };
  // useEffect(()=>{
  //   fetchData=

  // })
  useEffect(()=>{
  apiData();  
  fetchPost();
     },[])
     console.log(posts);
    //  const bannerImg=img2;
    //  const fullDescription='abd';
    //  const title='hello';
  return (
    <div>

    {
      data.map((e)=>{
        const{title, fullDescription, bannerImg}=e;
        return(
          <>
           <header className='header'>
        {/* <h1>Full Guide to Becoming a Professional Chef</h1> */}
        <h1>{title}</h1>
      </header>
      <div className='author-data-date'>
        <div className='author-data'>
          <img src={profilepic1}/>
          <span  className='author-name'>John Smith</span>
        </div>
        <span className='date'>January 2023</span>
      </div>
      <br/>
      <br/>
      <div className='para1'>
        {/* <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</p> */}
        <p>{fullDescription}</p>
      </div>
      <br/>
      <br/>
      <div className='big-img-div' >
        <img src={bannerImg} className="img-2" />
      </div>
          </>
        )
      })
    }
    <div/>

     



      <br/>
      <br/>
      <div className='p-s-d'>
        <div className='para-share' >
          <div>
          
        {
          posts.map((elem)=>{
            const{question,answer}=elem;
            return(
              <>
                <div>
                  <br/>
                  <div className='q'>{question}</div>
                  <br/>
                  {/* img3 */}
                  <div className='ans'>{answer}</div>
                  <br/>
                </div>
              </>
            )
          }
          )
        }    
      </div>
      
      <div className='share'>
            <p>SHARE THIS ON</p>
            <ul className='logos'>
                <li><a href='' target="_blank"><FaFacebookF className='facebook'/></a></li>
                <li><a href='' target="_blank"><FaTwitter className='twitter'/></a></li>
                <li><a href='' target="_blank"><FaInstagram className='instagram'/></a></li>
            </ul>
      </div>
        
      </div>
      <div className='word-block'>
        <p >“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.”</p>

      </div>
        <br/>
        <br/>
        
    </div>
        <Subscribe />
        <div className='recipesandheading' id='recipe'>
          <h3 className='recepe-heading'>Check out the delicious recipe</h3>
          <div className='re-cipe'>
            {
              recipe.map((elem)=>{
                const {img, title}=elem;
                return(
                  <>
                  <div className='r-s'>
                   <div className='rs-image'><img src={img} className="ima-ge"/></div>
                    <p className='recipe-title'>{title}</p>
                    <span>30 min</span>
                    
                    <span className='clock-icon'><RiTimerFill/></span>
                    </div>
                    
                  </>
                )
              }
              )
           
            }
          </div>
        </div>
  </div>


  )
}

export default Singleblog
