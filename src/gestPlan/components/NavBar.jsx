import { useAuthStore } from "../../hooks";

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {  Groups2 } from "@mui/icons-material";
import { GridMenuIcon } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const { startLogout, user } = useAuthStore();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // console.log(user);
  return (
    <>
      <AppBar sx={{ marginBottom: "15px" }} position="static">
        <Toolbar>
          <Box component={"img"} src="/public/img/Gob.png"></Box>
          <IconButton color="inherit">
            <Groups2 sx={{ width: "50px", fontSize: 60 }} />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <GridMenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                component={Link}
                to={"/usuarios"}
                onClick={handleCloseNavMenu}
                disabled={!user.roles.includes('ADMIN')}
              >
                <Typography textAlign="center">Usuarios</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/Search"}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Buscar</Typography>
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/Config"}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Configuración</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              to={"/usuarios"}
              disabled={!user.roles.includes('ADMIN')}
            >
              Usuarios 
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              to={"/Search"}
            >
              Buscar
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
              component={Link}
              to={"/Config"}
            >
              Configuración
            </Button>
            <ButtonGroup variant={"contained"}></ButtonGroup>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Typography textAlign="center">{user.name}</Typography>
            <Button variant="outline" onClick={startLogout}>
              Salir
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
