// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import './App.css';
import CourseListView from './views/CourseListView';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
            >
              Beauty Academy
            </Typography>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/" element={<CourseListView />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;