import './App.css';
import React, { useState } from 'react';
import { UserContextConsumer } from '../../userContext';
import Header from '../Header';

const App = () => {
  return (
    <section>
      <Header />
      <UserContextConsumer>
        {() => (
          <main>
            <p className='main'> 🗣 No new notifications, username! 🎉</p>
            <input type='text' name='newUsername' placeholder='New username' />
            <button>Change Username</button>
          </main>
        )}
      </UserContextConsumer>
    </section>
  );
};

export default App;
