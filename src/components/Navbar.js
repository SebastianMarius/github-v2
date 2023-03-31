import * as React from "react";
import { useState, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import "../styling/Navbar.css";
import { FormControl } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import LogoutIcon from "@mui/icons-material/Logout";
import useUserHook from "../hooks/useUserHook";
import env from "react-dotenv";

// console.log(process.env);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Navbar(props) {
  const navigate = useNavigate();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  function handleSubmit(event) {
    if (event.keyCode === 13) {
      navigate(`/profile/${event.target.value}`);
    }
  }

  const buttonOnCLick = () => {};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#555555" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="span"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "inline-flex" } }}
          >
            <Typography
              variant="h6"
              component="span"
              onClick={() => navigate("/")}
              className="typho-homepg"
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              component="span"
              onClick={() => navigate("/searchforuser")}
              className="typho-homepg"
            >
              Search for users
            </Typography>
            <Typography
              variant="h6"
              component="span"
              onClick={() => navigate("/wordle")}
              className="typho-homepg"
            >
              Wordle
            </Typography>
          </Typography>

          <Box>
            <IconButton
              sx={{ p: 1, mr: 3 }}
              aria-controls={open ? "" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              onClick={handleClick}
            >
              {/* {console.log(user)} */}
              {user && <Avatar alt="Poza" src={user.picture} />}
            </IconButton>
            {user && (
              <StyledMenu
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={handleClose}
                  sx={{ cursor: "default" }}
                  disableRipple
                >
                  {"Name: " + user.name}
                </MenuItem>
                {user.email && (
                  <MenuItem
                    onClick={handleClose}
                    sx={{ cursor: "default" }}
                    disableRipple
                  >
                    {"Email: " + user.email}
                  </MenuItem>
                )}

                <Divider sx={{ my: 0.5 }} />

                <MenuItem
                  sx={{ color: "red" }}
                  onClick={() => {
                    logout({
                      logoutParams: {
                        returnTo: "http://localhost:3000",
                      },
                    });
                  }}
                  disableRipple
                >
                  <LogoutIcon />
                  Logout
                </MenuItem>
              </StyledMenu>
            )}
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>

            <FormControl>
              <StyledInputBase
                onKeyDown={(e) => {
                  handleSubmit(e);
                }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </FormControl>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
