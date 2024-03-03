import React from 'react';
import './home.css';


const NoteList = ({ notes, removeNote}) => {
  return (
    <div className='pre'>
      {notes.map((note, index) => (
        <div className='p' key={index} style={{backgroundColor:note.color}}>
          <h3 className='notetitle'>{note.title}</h3>
          <p className='notebody'>{note.body}</p>
          <p className='Date'>Created At :{new Date(note.createdAt).toLocaleString()}</p>
          <p className='remi'>Reminder :  {note.reminder}</p>
         <button className='remove' onClick={() => removeNote(index)}>Remove</button>
          

          
        </div>
      ))}
    </div>
  );
};

export default NoteList;