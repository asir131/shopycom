import  { createContext } from "react"; // Import React
import all_products from "../assets/all_products";
import PropTypes from 'prop-types';
export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const contextValue = { all_products };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} {/* Use props.children */}
        </ShopContext.Provider>
    );
};
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };
export default ShopContextProvider;
