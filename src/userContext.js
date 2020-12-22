import React, { useState } from 'react';
const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [userName, setUserName] = useState('Elle');
  const changeUserName = (newName) => {
    setUserName(newName);
  };
  return (
    <UserContext.Provider value={{ userName, changeUserName }}>
      {props.children}
    </UserContext.Provider>
  );
};

export { UserContextProvider, UserContext };
