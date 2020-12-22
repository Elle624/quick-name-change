import './App.css';
import React, { useState, useRef } from 'react';
import { UserContextConsumer } from '../../userContext';
import Header from '../Header';

const App = () => {
  const [newUserName, setUserName] = useState('');
  const inputRef = useRef(null);

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <section>
      <Header />
      <UserContextConsumer>
        {({ userName, changeUserName }) => (
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
            <button
              onClick={() => {
                changeUserName(newUserName);
                setUserName('');
                inputRef.current.disabled = false;
                inputRef.current.focus();
              }}
            >
              Change Username
            </button>
          </main>
        )}
      </UserContextConsumer>
    </section>
  );
};

export default App;
