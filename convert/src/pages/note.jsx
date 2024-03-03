import React, { useState } from 'react';
import './home.css'



const NoteForm = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) return;
    addNote({ title :title.substring(), body :body.substring(),
      createdAt:new Date().toISOString(),reminder, });
    setTitle('');
    setBody('');
    setReminder('')
  };

  return (<div className='form'>
    <form onSubmit={handleSubmit} className='fo'>
      <input type="text" placeholder="Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Write your daily note" value={body} required onChange={(e) => setBody(e.target.value)}  ></textarea>
      <input type="text" placeholder="Reminder" value={reminder} required onChange={(e) => setReminder(e.target.value)}/>

      <button className='sub' type="submit">Add Note</button>
    </form></div>
  );
};

export default NoteForm;