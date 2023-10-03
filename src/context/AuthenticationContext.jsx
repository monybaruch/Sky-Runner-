import { createContext, useState } from 'react';

export const AuthContext = createContext();

const localStorageUser = localStorage.getItem('UserData') ? JSON.parse(localStorage.getItem('userData')) : null;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorageUser);
  const userLogin = (formData) => {
    const { name, password } = formData;
    let isAdmin = false;
    if (name === 'admin' && password === 'admin') {
      isAdmin = true;
    }
    const userData = { name, isAdmin };
    localStorage.setItem('userData', JSON.stringify(userData));
    setUser(userData);
  };
  const userLogOut = () => {
    localStorage.removeItem('userData');
    setUser(null);
  };
  return <AuthContext.Provider value={(user, userLogin, userLogOut)}>{children}</AuthContext.Provider>;
};
