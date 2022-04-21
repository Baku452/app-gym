import { createContext, useState } from 'react';

const Context = createContext();

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem('jwt'));
  const [idUser, setIdUser] = useState(() => window.sessionStorage.getItem('idUser'));
  const [fullName, setFullName] = useState(() =>
    window.sessionStorage.getItem('fullName'),
  );
  const [roles, setRoles] = useState(() => window.sessionStorage.getItem('roles'));
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider
      value={{
        jwt,
        fullName,
        idUser,
        roles,
        loading,
        setJWT,
        setFullName,
        setIdUser,
        setRoles,
        setLoading,
      }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
