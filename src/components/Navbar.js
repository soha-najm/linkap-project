import React, { useContext } from "react";
import ToggleButton from "./ToggleButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "./Sidebar";
import {themeContext} from '../App'

const Navbar = () => {

  const themeMode=useContext(themeContext)
  
  const toggleDarkMode = () => themeMode.setDarkMode(!themeMode.darkMode);


  return (
    <>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Sidebar />
          <Typography variant="h6" component="div" sx={{ mr: "auto" }}>
            Linkap
          </Typography>
          <ToggleButton change={toggleDarkMode} check={themeMode.darkMode} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
