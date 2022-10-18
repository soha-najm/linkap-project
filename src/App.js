import React, { useState , createContext} from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
// components
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { CssBaseline , createTheme , ThemeProvider } from "@mui/material";

export const themeContext = createContext();

 function App() {

  // login process
  const user = localStorage.getItem("loggedInId");

  const history = useHistory();
  if (!user) history.replace("/login")



  const ProtectedRoute = ({ user , children }) => {
    if (!user)
      return history.replace("/login");
    
    return children;
  };


  // theme 

  const [darkMode , setDarkMode]= useState("light")

  const darkTheme = createTheme({
     palette: {
       mode: darkMode ? 'dark': 'light' 
     },
   });
  

  return (
    <>
      <themeContext.Provider value={{darkMode , setDarkMode}}>  
      <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
        <Navbar   />
      </ThemeProvider>

      

      <Switch>
          
        <ThemeProvider theme={darkTheme}>
        <Route  path="/login" component={Login} />
        <Route path="/dashboard">
          <ProtectedRoute user={user}>
            <Dashboard />
          </ProtectedRoute>
        </Route>
        <Route exact path="/" component={Login} />
      </ThemeProvider>
      </Switch>
      </themeContext.Provider>
    </>
  );
}

export default App;
