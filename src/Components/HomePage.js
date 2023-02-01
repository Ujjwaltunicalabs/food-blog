import React from "react";
import Subscribe from "./Subscribe/Subscribe";
import BodyHead from "./BodyHead/BodyHead";
import Searchbar from "./SearchBar/Searchbar";
import Body from "./Body/Body";

const Homepage = () => {
  return (
    <div >
      <BodyHead />
      <Searchbar />
      <Body />
      <Subscribe />
    </div>
  );
};

export default Homepage;
