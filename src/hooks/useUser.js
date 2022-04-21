import Context from 'context/UserContext';
import { useContext, useCallback } from 'react';
import loginService from 'services/loginService';

export default function useUser() {
  const { jwt, setFullName, setJWT, setRoles, idUser, setIdUser } = useContext(Context);

  const login = useCallback(
    ({ username, password }) => {
      loginService({ username, password })
        .then(data => {
          const { user, roles } = data;
          window.sessionStorage.setItem('roles', roles);
          window.sessionStorage.setItem('jwt', data.token);
          window.sessionStorage.setItem('fullName', user.fullName);
          window.sessionStorage.setItem('idUser', user._id);
          setJWT(data.token);
          setFullName(user.fullName);
          setIdUser(user._id);
          setRoles(roles);
        })
        .catch(e => {
          console.log(e);
          throw new Error(e);
        });
    },
    [setJWT, setFullName, setRoles, setIdUser],
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
