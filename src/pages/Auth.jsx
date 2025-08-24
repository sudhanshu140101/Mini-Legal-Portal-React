import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Container,
  Stack,
  Alert
} from '@mui/material';

// Simple validation rules
const loginRules = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const signupRules = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password')
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(isLogin ? loginRules : signupRules)
  });

  // Handle form submission
  const onSubmit = (data) => {
    const userData = {
      name: data.name || data.email.split('@')[0],
      email: data.email,
      id: Date.now()
    };
    
    login(userData);
    navigate('/dashboard');
  };

  // Switch between login and signup
  const switchMode = () => {
    setIsLogin(!isLogin);
    reset();
  };

  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#f8fafc',
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            sx={{
              p: 6,
              borderRadius: 3,
              boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
              textAlign: 'center',
              width: '100%',
              maxWidth: 500
            }}
          >
            {/* Header */}
            <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#1e293b' }}>
              {isLogin ? '👋 Welcome Back!' : '🚀 Join LegAssist'}
            </Typography>
            
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              {isLogin ? 'Sign in to access your legal dashboard' : 'Create your free account and start today'}
            </Typography>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                
                {/* Name field - only for signup */}
                {!isLogin && (
                  <TextField
                    {...register('name')}
                    fullWidth
                    label="Full Name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    placeholder="Enter your full name"
                    sx={{ textAlign: 'left' }}
                  />
                )}

                {/* Email field */}
                <TextField
                  {...register('email')}
                  fullWidth
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  placeholder="Enter your email"
                  sx={{ textAlign: 'left' }}
                />

                {/* Password field */}
                <TextField
                  {...register('password')}
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  placeholder="Enter your password"
                  sx={{ textAlign: 'left' }}
                />

                {/* Confirm Password - only for signup */}
                {!isLogin && (
                  <TextField
                    {...register('confirmPassword')}
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                    placeholder="Confirm your password"
                    sx={{ textAlign: 'left' }}
                  />
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    mt: 3,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
                      transform: 'translateY(-1px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isLogin ? '🔐 Sign In Now' : '✨ Create My Account'}
                </Button>

                {/* Switch Mode Button */}
                <Button
                  onClick={switchMode}
                  color="primary"
                  size="large"
                  sx={{ 
                    textTransform: 'none',
                    fontSize: '1rem',
                    py: 1.5
                  }}
                >
                  {isLogin 
                    ? "Don't have an account? Sign Up Free" 
                    : "Already have an account? Sign In"
                  }
                </Button>

                {/* Demo Info */}
                <Alert severity="info" sx={{ textAlign: 'left', mt: 2 }}>
                  <strong>Demo Mode:</strong> Use any email and password to {isLogin ? 'login' : 'create account'}. 
                  Your data is stored locally for this demo.
                </Alert>

              </Stack>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Auth;
