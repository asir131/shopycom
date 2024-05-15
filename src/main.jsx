import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './Context/LoginContext.jsx'
import { store } from "./store";
import { Provider } from 'react-redux'
// import {ShopContextProvider} from './Context/ShopContext.jsx'
import './index.css'
// import ShopContextProvider from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ShopContextProvider> */}
    <Provider store={store}>
    <AuthProvider>
    {/* <ShopContextProvider> */}
      
        <App />
      
    {/* </ShopContextProvider> */}
    </AuthProvider>
    </Provider>
    {/* </ShopContextProvider> */}
    
    
  </React.StrictMode>,
)
