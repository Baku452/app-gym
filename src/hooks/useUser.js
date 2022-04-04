import Context from 'context/UserContext';
import { useContext, useCallback } from 'react';
import loginService from 'services/loginService';

export default function useUser() {
  const { jwt, setFullName, setJWT, setRoles } = useContext(Context);

  const login = useCallback(
    ({ username, password }) => {
      loginService({ username, password })
        .then(data => {
          const { user, roles } = data;
          window.sessionStorage.setItem('roles', roles);
          window.sessionStorage.setItem('jwt', data.token);
          window.sessionStorage.setItem('fullName', user.fullName);
          setJWT(data.token);
          setFullName(user.fullName);
          setRoles(roles);
        })
        .catch(e => {
          console.log(e);
          throw new Error(e);
        });
    },
    [setJWT, setFullName, setRoles],
  );

  const logout = useCallback(() => {
    setJWT(null);
  }, [setJWT]);
  return {
    isLogged: Boolean(jwt),
    login,
    logout,
  };
}
