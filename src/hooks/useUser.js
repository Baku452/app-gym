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

          setJWT(data.token);
          setFullName(user.fullName);
          // setRoles(roles);
          window.sessionStorage.setItem('roles', roles);
          window.sessionStorage.setItem('jwt', data.token);
          window.sessionStorage.setItem('fullName', user.fullName);
        })
        .catch(e => {
          throw new Error(e);
        });
    },
    [setJWT, setFullName],
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
