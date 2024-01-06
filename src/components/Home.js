// src/Home.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBookmark } from '../redux/bookmarkSlice';
import Quote from './Quote';
import '../App.css'; // Import the app.css file
import BookmarkIcon from "../assets/bi_bookmark-plus-fill.png"

function Home() {
  const [quote, setQuote] = useState(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const result = await response.json();
      setQuote(result);
    } catch (error) {
      console.log(error);
    }
  };

  const bookmark = () =>{
    dispatch(addBookmark(quote));
  }

  useEffect(() => {
    fetchData();
  }, []); 

  return (
    <div className=''>
      <div className='quote-container'>
        <div>
          {quote != null ? (
            <Quote
              key={quote._id}
              text={quote.content}
              author={quote.author}
            />
          ) : (
            ''
          )}
          <img
            src={BookmarkIcon}
            alt="Bookmark"
            className="bookmark-icon"
            onClick={bookmark}
          />
        </div>
        
      </div>
      <button onClick={fetchData} className='next-button'>Next</button>
    </div>
  );
}

export default Home;
