import React, { useState } from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Button } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

const route = [
  { title: 'Dashbord', icon: 'fas fa-chart-pie', path: '/app/dashbord' },
  { title: 'Reminder', icon: 'fas fa-sticky-note', path: '/app/reminder' },
  { title: 'Manage', icon: 'fas fa-edit', path: '/app/manage' },
]
const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '0 30px',
  },
  color_header: {
    backgroundColor: '#ffa2a2',
    padding: '0 30px',
    color: '#fff',
    width: '100%',
    height: '50px',
  },
  block_menu: {
    backgroundColor: '#fff',
    color: 'gray',
    cursor: 'pointer'
  }
});

export default function Layout() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [Page, setPage] = useState('dashbord')
  const [isShowMenuMobile, setisShowMenuMobile] = useState(false)
  const navigate = useNavigate();
  const showMenuMobile = () => {
    setisShowMenuMobile(!isShowMenuMobile)
  }
  const handleClickPath = (page) => {
    setPage(page.title)
    navigate(page.path)
  }
  const handleClick = () => {
    dispatch.authentication.logout()
  }
  return (
    <>
      <Paper elevation={3} >
        <MenuList className={`h-full hidden sm:w-48 sm:block ${classes.root}`}>
          {route.map((r, i) => {
            if (r.title === Page) {
              return (
                <MenuItem key={`menu-web-${i}`} onClick={() => handleClickPath(r)}>
                  <ListItemIcon>
                    <i className={`${r.icon} text-[#ffa2a2]`}></i>
                  </ListItemIcon>
                  <ListItemText>{r.title}</ListItemText>
                </MenuItem>)
            } else {
              return (
                <MenuItem key={`menu-web-${i}`} onClick={() => handleClickPath(r)}>
                  <ListItemIcon>
                    <i className={`${r.icon}`}></i>
                  </ListItemIcon>
                  <ListItemText>{r.title}</ListItemText>
                </MenuItem>)
            }
          }
          )}
          <Divider />
          <Button color='primary' variant='contained' fullWidth startIcon={<LogoutIcon />}> Logout</Button>
        </MenuList>
      </Paper>
      <Box className={`${classes.color_header} flex justify-between items-center sm:hidden `}>
        <IconButton onClick={() => showMenuMobile()}>
          <MenuIcon className='text-white' />
        </IconButton>
        <span className='uppercase'>{Page}</span>
        <IconButton onClick={() => handleClick()}>
          <LogoutIcon className='text-white' />
        </IconButton>
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isShowMenuMobile}
        onClick={() => setisShowMenuMobile(false)}
      >
        <div className='grid grid-rows-2 grid-flow-col sm:grid-rows-3 sx:grid-flow-col  gap-2 flex'>
          {route.map((r, i) =>
            <Box key={i} className={`${classes.block_menu} w-[120px] h-[120px] rounded-lg hover:shadow-inner`} onClick={() => handleClickPath(r)}>
              <div className='block items-center mt-8'>
                <div className='flex justify-center text-2xl'>
                  <i className={r.icon}></i>
                </div>
                <div className='text-center' >
                  <Typography variant="h6" component="h6" >{r.title}</Typography>
                </div>
              </div>
            </Box>
          )}
        </div>
      </Backdrop >
    </>
  )
}
