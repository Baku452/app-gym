import Context from 'context/UserContext';
import { useContext, useCallback } from 'react';
import loginService from 'services/loginService';

export default function useUser() {
  const { jwt, setFullName, setJWT } = useContext(Context);

  const login = useCallback(
    ({ username, password }) => {
      loginService({ username, password })
        .then(data => {
          window.sessionStorage.setItem('jwt', data.token);
          setJWT(data.token);
          const { user } = data;
          setFullName(user.fullName);
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
