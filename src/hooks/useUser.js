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
          const { user } = data;
          console.log(user);
          setJWT(data.token);
          setFullName(user.fullName);
        })
        .catch(e => {
          console.log(console.error());
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
