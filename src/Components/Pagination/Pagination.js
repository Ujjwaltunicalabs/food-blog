import React, { useState } from "react";
import { BiSkipNext } from "react-icons/bi";
import "./pagination.css";

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="navi">
        {pageNumber.map((number) => (
          <a
            href="#"
            onClick={() => {
              paginate(number);
              handleClick();
            }}
            className={({ isActive }) => (isActive ? "black-btn" : "inactive ")}
          >
            <li>{number}</li>
          </a>
        ))}
        {/* <a href="#">
          <li>
            <BiSkipNext />
          </li>
        </a> */}
      </ul>
    </nav>
  );
};

export default Pagination;
