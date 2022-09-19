import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import theme from './styles/theme';

const Router = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          {/* <Route path='' element={} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
