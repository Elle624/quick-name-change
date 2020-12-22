import React, { useState } from 'react';
const { Provider, Consumer } = React.createContext();

const UserContextProvider = (props) => {
  const [userName, setUserName] = useState('Elle');
  const changeUserName = (newName) => {
    setUserName(newName);
  };
  return (
    <Provider value={{ userName, changeUserName }}>{props.children}</Provider>
  );
};

export { UserContextProvider, Consumer as UserContextConsumer };
