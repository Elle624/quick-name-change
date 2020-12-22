import './App.css';
import React, { useState, useRef, useContext } from 'react';
import { UserContext } from '../../userContext';
import Header from '../Header';

const App = () => {
  const [newUserName, setUserName] = useState('');
  const inputRef = useRef(null);
  const { userName, changeUserName } = useContext(UserContext);

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    changeUserName(newUserName);
    setUserName('');
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  return (
    <section>
      <Header />
      <main>
        <p className='main'> 🗣 No new notifications, {userName}! 🎉</p>
        <input
          ref={inputRef}
          type='text'
          name='newUsername'
          placeholder='New username'
          value={newUserName}
          onChange={updateUserName}
        />
        <button onClick={handleSubmit}>Change Username</button>
      </main>
    </section>
  );
};

export default App;
