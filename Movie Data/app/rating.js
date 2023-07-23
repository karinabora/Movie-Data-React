"use client"
import React, { useState } from 'react';
import Movie_row from "./movie_row.js";
function Rating() {
  const [count, setCount] = useState(0);
 
  const handleLikeClick = () => {
    setCount(count + 1);
  };
 
  const handleDislikeClick = () => {
    setCount(count - 1);
  };
 
 
   
  return (
    <>
      <img className ="like" src="Icon - Like.png" onClick={handleLikeClick} />
      <div className="votes">{count}</div>
      <img className="dislike" src="Vector.png" onClick={handleDislikeClick} />
    </>
  );
};


export default Rating;


/**"use client"
import React, { useState } from 'react';
import Movie_row from "./Movie_row.js";
function Rating(onclick_like,onclick_dislike) {
  const [count, setCount] = useState(0);
 
  const handleLikeClick = () => {
    setCount(count + 1);
  };
 
  const handleDislikeClick = () => {
    setCount(count - 1);
  };
 
 
   
  return (
    <>
      <img className ="like" src="Icon - Like.png" onclick_like={handleLikeClick} />
      <div className="votes">{count}</div>
      <img className="dislike" src="Vector.png" onclick_dislike={handleDislikeClick} />
    </>
  );
};


export default Rating;**/


