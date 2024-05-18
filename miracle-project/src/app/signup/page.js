"use client";
import React from 'react';
import Link from 'next/link';
import { db } from '../../../server/firebase';
import { collection, addDoc } from 'firebase/firestore';
// components/SignUpForm.js

import { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Implement your sign-up logic here
    console.log('Signing up with:', { email, password });
    try {
        const docRef = await addDoc(collection(db, "users"), {
            username: email,
            password: password,
            friends: [],
          });
          
    } catch (e) {
        console.error("error adding document", e);
    }
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="large"
    sx={{
        backgroundColor: '#fdfbf2', // Set the background color to cream
        height: '100vh',
        padding: '2rem', // Add padding for spacing inside the container
        borderRadius: '8px', // Optional: Add border radius for rounded corners
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: Add box shadow for depth
      }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSignUp}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          style={{ marginTop: '1rem', backgroundColor: 'black', color: 'white' }}
        >
          Sign Up
        </Button>
      </form>
      <Container maxWidth="sm" style={{ textAlign: 'center', marginTop: '4rem' }}>
      <Typography variant="h6" style={{ marginTop: '1rem' }}>
        Already have an account?{' '}
        <Link href="/">
          <p style={{ textDecoration: 'none', color: 'blue' }}>Log In</p>
        </Link>
      </Typography>
    </Container>
    </Container>
  );
};

export default SignUp;
