import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const AuthContext = createContext();
import all_products from "../assets/all_products";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [isAuthenticated,setIsAuthenticated]=useState(false);
  const [mail,setMail] = useState('');
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn,all_products,admin ,setAdmin,isAuthenticated,setIsAuthenticated,setMail,mail}}>
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };