import React from 'react';
const { Provider, Consumer } = React.createContext();

const UserContextProvider = (props) => {
  const [userName, setUserName] = useState('Elle');

  return <Provider value={userName}>{props.children}</Provider>;
};

export { UserContextProvider, Consumer as UserContextConsumer };
