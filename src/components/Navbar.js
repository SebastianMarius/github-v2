import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import '../styleing/Navbar.css'
import {useEffect, useState} from "react";
import { FormControl, } from '@mui/material';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));



function Navbar(props) {
    function handleSubmit(event) {

        if(event.keyCode === 13){
            console.log('value', event.target.value);
            props.setUser(event.target.value);


            fetch('https://api.github.com/users/' + event.target.value)
                .then((r) => r.json())
                .then((data)=> props.setUser(data));


            fetch('https://api.github.com/users/' + event.target.value + '/repos')
                .then((r) => r.json())
                .then((data) => props.setRepos(data))


        }


    }

    const buttonOnCLick = (() => {
        console.log('plm');
    })


    // const saveUserInput =  (input) => {
    //     props.setUser(input.target.value);
    //
    // }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: '#555555'}}>
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
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'inline-flex' },}}
                    >

                        <Typography variant="h6" component="div"  onClick={buttonOnCLick} className='typho-homepg'>
                            Home
                        </Typography>
                        <Typography variant="h6" component="div"  onClick={buttonOnCLick} className='typho-homepg'>
                            Some page
                        </Typography>
                        <Typography variant="h6" component="div"  onClick={buttonOnCLick} className='typho-homepg'>
                            Other page
                        </Typography>


                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>

                        <FormControl   >
                            <StyledInputBase

                                onKeyDown={handleSubmit}
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />

                        </FormControl>
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Navbar;