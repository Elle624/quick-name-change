import React, { useContext } from 'react';
import { UserContext } from '../../userContext';

const Header = () => {
  const { userName } = useContext(UserContext);
  return (
    <header>
      <p>Welcome, {userName}!</p>
    </header>
  );
};
export default Header;
