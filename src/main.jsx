import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './Context/LoginContext.jsx'
import './index.css'
// import ShopContextProvider from './Context/ShopContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ShopContextProvider> */}
    <AuthProvider>
    <App />
    </AuthProvider>
    {/* </ShopContextProvider> */}
    
    
  </React.StrictMode>,
)
