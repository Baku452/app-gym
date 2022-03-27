import { createContext, useState } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
  const [fullName, setFullName] = useState(() =>
    window.sessionStorage.getItem('fullName'),
  );
  return (
    <Context.Provider value={{ jwt, fullName, setJWT, setFullName }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
