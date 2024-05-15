import  { createContext } from "react"; // Import React
import all_products from "../assets/all_products";
import PropTypes from 'prop-types';
export const ShopContext = createContext();

export const ShopContextProvider = (children) => {
    const contextValue = { all_products };

    return (
        <ShopContext.Provider value={contextValue}>
            {children} {/* Use props.children */}
        </ShopContext.Provider>
    );
};
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

