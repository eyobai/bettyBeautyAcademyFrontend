// src/views/CourseListView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function CourseListView() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:3000/courses', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM3NzEwMDQwLCJleHAiOjE3Mzc3MTM2NDB9.3b6k4ifmsK08Zop3IidGQZvoJoQvUQrT0_xhmKo5DqM`
      }
    })
      .then(response => {
        console.log('Fetched courses:', response.data); // Debugging log
        setCourses(response.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);


  const handleRegisterClick = (course) => {
    const paymentData = {
      amount: "10",
      currency: "ETB",
      email: "abebech_bekele@gmail.com",
      first_name: "Bilen",
      last_name: "Gizachew",
      phone_number: "0912345678",
      tx_ref: "chewatatest-666900",
      callback_url: "https://webhook.site/077164d6-29cb-40df-ba29-8a00e59a7e60",
      return_url: "https://www.google.com/"
    };

    axios.post('http://localhost:3000/payments/initialize', paymentData)
      .then(response => {
        console.log('Payment initialized:', response.data);
        // Handle success, e.g., redirect to a success page or show a message
      })
      .catch(error => {
        console.error('Error initializing payment:', error);
        // Handle error, e.g., show an error message
      });
  };
  return (
    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        Courses
      </Typography>
      <Grid container spacing={3}>
        {courses.map(course => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {course.description}
                </Typography>
                <Typography variant="h6" component="p">
                  Fee: ${course.fee}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  style={{ marginTop: '10px' }}
                  onClick={() => handleRegisterClick(course)}
                >
                  Register
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default CourseListView;