import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./body.css";
import Pagination from "../Pagination/Pagination";
import img2 from "../../images/image26(2).png";
import img from "../../images/image26.png";
import img3 from "../../images/image26(3).png";
import img4 from "../../images/image26(4).png";
import img5 from "../../images/image26(5).png";
import img6 from "../../images/image26(6).png";
import pp2 from "../../images/Ellipse2(1).png";
import pp1 from "../../images/Ellipse2.png";
import pp3 from "../../images/Ellipse2(2).png";
import pp4 from "../../images/Ellipse2(3).png";
import pp5 from "../../images/Ellipse2(4).png";
import pp6 from "../../images/Ellipse2(5).png";
import rp1 from "../../images/recipeimage1.png";
import rp2 from "../../images/recipeimage2.png";
import rp3 from "../../images/recipeimage3.png";

const Body = () => {
  const arrayobjects = [
    {
      bannerImg: img,
      title: "Crochet Projects for Noodle Lovers",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp1,
      Name: "Wade Warren",
      Date: "12 November 2021",
    },
    {
      bannerImg: img2,
      title: "10 Vegetarian Recipes To Eat This Month",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim",
      Profile_pic: pp2,
      Name: "Robert Fox",
      Date: "12 November 2021",
    },
    {
      bannerImg: img3,
      title: "Full Guide to Becoming a Professional Chef",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp3,
      Name: "Dianne Russel",
      Date: "12 November 2021",
    },
    {
      bannerImg: img4,
      title: "Simple & Delicious Vegetarian Lasagna",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp4,
      Name: "Leslie Alexander",
      Date: "12 November 2021",
    },
    {
      bannerImg: img5,
      title: "Plantain and Pinto Stew with Aji Verde",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp5,
      Name: "Courtney Henryn",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
    {
      bannerImg: img6,
      title: "We’re Hiring a Communications Assistant!",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ",
      Profile_pic: pp6,
      Name: "Albert Flores",
      Date: "12 November 2021",
    },
  ];
  //---------------------------------------------------------------------------------------//
  const recipesobjects = [
    {
      bannerImg: rp1,
      Title: "Chicken Meatballs with Cream Cheese",
      Author: "By Andreas Paula",
    },
    {
      bannerImg: rp2,
      Title: "Traditional Bolognaise Ragu",
      Author: "By Andreas Paula",
    },
    {
      bannerImg: rp3,
      Title: "Pork and Chive Chinese Dumplings",
      Author: "By Andreas Paula",
    },
  ];
  const [posts, setPosts] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    setLoading(true);
    // fetch("https://foodieland-api.onrender.com/blogs")
    // .then((res)=>res.json()).then((data)=>setRecipe(data));
    fetch("https://foodieland-api.onrender.com/blogs")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  console.log(posts);

  // useEffect(() => {
  //     fetch("https://foodieland-api.onrender.com/")
  //       .then((response) => response.json())
  //       .then((data) => setPosts(data));
  //   }, []);
  // fetchPost();
  // , {
  //     method: 'GET',

  //   });

  //  let Data = await request.json()
  // console.log(Data)

  const indexOfLastPost = currentPage* postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
   const currentPosts = posts && posts?.allBlogs?.length > 0 && posts?.allBlogs.slice(indexOfFirstPost, indexOfLastPost);
  const paginate =pageNumber=> setCurrentPage(pageNumber);

   
//   const currentPosts = posts.allBlogs.slice(indexOfFirstPost, indexOfLastPost);

  // console.log(paginate.allBlogs);

  // const [recipesitem,setItems] =useState(recipesobjects); use State
  return (
    <>
      <div className="blogsandarticle">
        <div className="blog-items" id="blogs">
          {currentPosts && currentPosts.length > 0 && currentPosts.map((elem) => {
             //const { title, shortDescription, bannerImg, createdAt, id } = elem;
            // const Name = "abc";
            // const Profile_pic = pp1;
            //const date='january'
            return (
              <>
                <div className="block">
                  <div className="images" key = {elem.id}>
                    <img src={elem?.bannerImg} alt="image" />
                  </div>
                  <div>
                    <div className="title">
                      <Link to={`blog/${elem?.id}`}>
                        <h3>{elem?.title}</h3>
                      </Link>
                    </div>

                    <div className="description">{elem?.shortDescription}</div>

                    <div className="author">
                      <div className="profile-pic">
                        <img src={elem.author.authorImg} alt="image"></img>
                      </div>
                      <div className="nd">
                        <div className="name">{elem.author.name}</div>
                        <div className="c-date">January 2023</div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
              </>
            );
          })}
          <br />
          <div className="pag">
            
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>

        <div className="recipes">
          <p className="Recipes-heading" id="recipe">
            Tasty Recipes
          </p>
          {posts && posts?.topItems?.length > 0 && posts?.topItems.map((elem) => {
            const {bannerImg, shortDescription}=elem;
            return (
              <>
                <div className="recipe-block">
                  <div className="recipe-images">
                    <img src={bannerImg} alt="image" className="rimage" />
                  </div>
                  <div className="titleandauthor">
                    <div className="recipe-title">{shortDescription}</div>
                    <div className="recipe-author">By Andreas Paula</div>
                  </div>
                </div>
              </>
            );
           })}
          <div className="gr">
            <div className="greenrectangle">
              {/* <img src={gr} /> */}
              <div className="image-writing">
                Don’t forget to eat healthy food
              </div>
              <div className="gradient">
                <div className="bgimage">
                  <a
                    href="wwww.foodieland.com"
                    target="_blank"
                    className="website"
                  >
                    www.foodieland.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
