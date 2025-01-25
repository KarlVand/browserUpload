

import { useContext, createContext } from "react";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState();

    

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};


