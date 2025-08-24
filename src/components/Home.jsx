import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import { Speed, Security, PhoneAndroid } from '@mui/icons-material';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Box>
      {/* Hero Section - Clean and Simple */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          py: 10,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
            ⚖️ LegAssist
          </Typography>
          
          <Typography variant="h5" sx={{ mb: 2, fontWeight: 400 }}>
            AI-Powered Legal Assistance
          </Typography>
          
          <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem', opacity: 0.9 }}>
            Get instant legal guidance 24/7. Simple, secure, and always available.
          </Typography>

          <Button
            component={Link}
            to={isAuthenticated ? "/dashboard" : "/auth"}
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: '#2563eb',
              px: 4,
              py: 2,
              fontSize: '1.1rem',
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#f8fafc' }
            }}
          >
            {isAuthenticated ? "Go to Dashboard" : "Get Started Free"}
          </Button>
        </Container>
      </Box>

      {/* Features Section - Simple Cards */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h4" 
          textAlign="center" 
          sx={{ fontWeight: 'bold', mb: 6, color: '#1e293b' }}
        >
          Why Choose LegAssist?
        </Typography>

        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CardContent>
                <Speed sx={{ fontSize: 50, color: '#2563eb', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Instant Responses
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Get immediate legal guidance powered by AI technology
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CardContent>
                <Security sx={{ fontSize: 50, color: '#2563eb', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Secure & Private
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your legal queries are completely confidential and secure
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
              <CardContent>
                <PhoneAndroid sx={{ fontSize: 50, color: '#2563eb', mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Always Available
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Access legal help 24/7 from any device, anywhere
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Simple Footer */}
      <Box
        sx={{
          bgcolor: '#1e293b',
          color: 'white',
          py: 4,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            ⚖️ LegAssist
          </Typography>
          <Typography variant="body2" color="grey.400" sx={{ mb: 3 }}>
            Your trusted AI-powered legal assistant
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="grey.400">
                📧 support@legassist.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="grey.400">
                📞 +1 (555) 123-4567
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="grey.400">
                📍 Legal District, NY
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body2" color="grey.500" sx={{ mt: 3 }}>
            © 2025 LegAssist. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
