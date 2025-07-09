import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

function AuthContextProvider(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const updateUserContext = (newData) => {
    const updatedUser = { ...user, ...newData };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, updateUserContext }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
