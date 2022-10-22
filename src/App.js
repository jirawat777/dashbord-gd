import './App.css';
import React, { useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom'
import GuardedRoute from './utils/GuardedRoute'
import DashbordPage from './pages/DashbordPage';
import ReminderPage from './pages/ReminderPage';
import ManagePage from './pages/ManagePage';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffa2a2',
    },
    info: {
      main: '#636363'
    },
    error: {
      main: '#c62828'
    }
  },
});

function App() {
  const isAuthorized = useSelector((state) => state.authentication.auth.is_authentication)

  return (
    <ThemeProvider theme={theme}>
      <div className="App block sm:flex">
        <Routes>
          <Route exact path='/' element={<LoginPage />} />
          <Route path='/app/dashbord' element={<GuardedRoute component={DashbordPage} auth={isAuthorized} />} />
          <Route path='/app/reminder' element={<GuardedRoute component={ReminderPage} auth={isAuthorized} />} />
          <Route path='/app/manage' element={<GuardedRoute component={ManagePage} auth={isAuthorized} />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
