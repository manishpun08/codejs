"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme(); // To access the theme's colors

  // Handle drawer toggling for mobile screens
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar position="sticky" sx={{ background: "teal" }}>
      <Toolbar sx={{ padding: "0 16px" }}>
        {/* Logo or Brand Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          MyBrand
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button
            sx={{
              color: "white",
              "&:hover": { backgroundColor: theme.palette.secondary.light },
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": { backgroundColor: theme.palette.secondary.light },
            }}
          >
            About
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": { backgroundColor: theme.palette.secondary.light },
            }}
          >
            Services
          </Button>
          <Button
            sx={{
              color: "white",
              "&:hover": { backgroundColor: theme.palette.secondary.light },
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          <ListItem component="li" onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem component="li" onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem component="li" onClick={toggleDrawer}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem component="li" onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
