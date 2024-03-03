import React, { useState, useEffect } from 'react';
import './home.css';
import './blog.css'
import NoteForm from './note';
import NoteList from './notes';
import randomColor from 'randomcolor';

const Home = () => {
  const [notes, setNotes] = useState([]);

  // Load notes from localStorage on initial render
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Add a new note to the list
  const addNote = (note) => {
    setNotes([...notes, { ...note, color: randomColor() }]);
  };

  // Remove a note from the list
  const removeNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div>
      <header className="fixed-top"> {/* Add fixed-top class to fix the navbar at the top */}
        <nav>
          <a href="#" className="logo"><span>MEMO</span> DASH</a>
          <ul className="links">
            <li className="active"><a href="/home">Home</a></li>
            <li><a href="/about">About-us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="social-links">
            {/* Add proper Font Awesome icons or use React Icons */}
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </nav>
      </header>
      
      <div className='blog'>
    
        {/* Render BLOG component */}
        <BLOG notes={notes} addNote={addNote} removeNote={removeNote} />
      </div>
     
    </div>
  );
};

// Define BLOG component
const BLOG = ({ notes, addNote, removeNote }) => {
  return (
    <div>
      {/* Display notes */}
      <NoteForm addNote={addNote} />
      <div className='rem'><NoteList notes={notes} removeNote={removeNote} /></div>
    </div>
  );
};

// Define NoteForm and NoteList components if not already defined

export default Home;
