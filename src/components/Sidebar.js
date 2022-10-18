import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoginIcon from "@mui/icons-material/Login";
import { Box, Drawer, Link, List } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <Box>
      <React.Fragment>
        <Drawer open={openSidebar} onClose={() => setOpenSidebar(false)}>
          <List>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText><Link href="/dashboard" underline="none"   color="inherit">Dashboard</Link></ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText ><Link href="/Login" underline="none"  color="inherit">Log out</Link></ListItemText>
            </ListItemButton>
          </List>
        </Drawer>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 5 }}
          onClick={() => {
            setOpenSidebar(!openSidebar);
          }}
        >
          <MenuIcon />
        </IconButton>
      </React.Fragment>
    </Box>
  );
};

export default Sidebar;
