import './App.css';
import React, { useState } from 'react';
import { UserContextConsumer } from '../../userContext';
import Header from '../Header';

const App = () => {
  const [newUserName, setUserName] = useState('');

  const updateUserName = (event) => {
    setUserName(event.target.value);
  };

  return (
    <section>
      <Header />
      <UserContextConsumer>
        {() => (
          <main>
            <p className='main'> 🗣 No new notifications, username! 🎉</p>
            <input
              type='text'
              name='newUsername'
              placeholder='New username'
              value={newUserName}
              onChange={updateUserName}
            />
            <button>Change Username</button>
          </main>
        )}
      </UserContextConsumer>
    </section>
  );
};

export default App;