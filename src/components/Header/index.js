import React from 'react';
import { UserContextConsumer } from '../../userContext';

const Header = () => {
  return (
    <UserContextConsumer>
      {() => (
        <header>
          <p>Welcome, username!</p>
        </header>
      )}
    </UserContextConsumer>
  );
};
export default Header;
