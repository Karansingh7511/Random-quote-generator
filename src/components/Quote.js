// src/components/Quote.js
import React from 'react';

const Quote = ({ text, author }) => {
  return (
    <div>
      <blockquote>
        <p className='quote-content'>{text}</p>
        <footer className='author'>- {author}</footer>
      </blockquote>
    </div>
  );
};

export default Quote;
