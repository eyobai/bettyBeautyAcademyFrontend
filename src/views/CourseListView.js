// src/views/CourseListView.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

function CourseListView() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/courses')
      .then(response => {
        console.log('Fetched courses:', response.data); // Debugging log
        setCourses(response.data);
      })
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleRegisterClick = (course) => {

    console.log('Course data:', course);
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