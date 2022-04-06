import { createContext, useState } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
  const [fullName, setFullName] = useState(() =>
    window.sessionStorage.getItem('fullName'),
  );
  const [roles, setRoles] = useState(() => window.sessionStorage.getItem('roles'));
  console.log(roles);
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider
      value={{
        jwt,
        fullName,
        roles,
        loading,
        setJWT,
        setFullName,
        setRoles,
        setLoading,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
