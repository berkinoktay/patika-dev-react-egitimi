import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvier = ({ children }) => {
  const [user, setUser] = useState(null);
  const values = {
    user,
    setUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
// Custom Hook olarak kullanırsak daha temiz kod yazabiliriz.
export const useTheme = () => useContext(UserContext);
