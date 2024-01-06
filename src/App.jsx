import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookmarkList from './components/BookmarkList';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
    <Router>
      <Navbar />
      <div >
      
        <Routes>
          <Route path="/random" element={<Home />} />
          <Route path="/bookmarks" element={<BookmarkList />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
};

export default App;
