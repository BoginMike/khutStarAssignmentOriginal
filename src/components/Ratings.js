import React from "react";
//import Users from "./components/Users";
//import SongCard from "./SongCard.js";
//import stars from "./star.png";
//import songs from "../services/songs.js";

const Ratings = ({ data }) => {
    return (
        <div className="rating">
    
{[...Array(data)].map((item,index)=>(
  <div class="star"></div>
))}
      

      </div>
    );
  };   


  export default Ratings;