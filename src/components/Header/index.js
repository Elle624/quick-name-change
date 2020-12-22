import React from 'react';
import { UserContextConsumer } from '../../userContext';

const Header = () => {
  return (
    <UserContextConsumer>
      {({ userName }) => (
        <header>
          <p>Welcome, {userName}!</p>
        </header>
      )}
    </UserContextConsumer>
  );
};
export default Header;
