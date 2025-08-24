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
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import { 
  Speed, 
  Security, 
  PhoneAndroid, 
  CheckCircle,
  Gavel,
  Chat,
  Analytics,
  CloudDone
} from '@mui/icons-material';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Speed sx={{ fontSize: 50, color: '#2563eb' }} />,
      title: 'Instant AI Responses',
      description: 'Get immediate legal guidance powered by advanced AI technology in seconds'
    },
    {
      icon: <Security sx={{ fontSize: 50, color: '#2563eb' }} />,
      title: 'Bank-Level Security',
      description: 'Your legal queries are encrypted and completely confidential'
    },
    {
      icon: <PhoneAndroid sx={{ fontSize: 50, color: '#2563eb' }} />,
      title: '24/7 Availability',
      description: 'Access professional legal help anytime, anywhere from any device'
    }
  ];

  const benefits = [
    'Instant legal query responses',
    'Secure document handling',
    'Query history management',
    'Professional legal guidance',
    'Mobile-friendly interface',
    'No appointment needed'
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Enhanced Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
          color: 'white',
          py: 12,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '70vh'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center" justifyContent="center">
            {/* Left Side - Main Content */}
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant="h1" 
                  sx={{ 
                    fontWeight: 'bold', 
                    mb: 3,
                    fontSize: { xs: '2.5rem', md: '4rem' },
                    background: 'linear-gradient(45deg, #ffffff, #e0e7ff)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  ⚖️ LegAssist
                </Typography>
                
                <Typography 
                  variant="h4" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 600,
                    fontSize: { xs: '1.5rem', md: '2rem' }
                  }}
                >
                  AI-Powered Legal Assistance Platform
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 4, 
                    opacity: 0.9,
                    lineHeight: 1.6,
                    fontSize: { xs: '1.1rem', md: '1.3rem' }
                  }}
                >
                  Transform your legal queries into instant, professional answers. 
                  Our AI-powered platform provides 24/7 legal assistance with 
                  bank-level security and complete confidentiality.
                </Typography>

                <Button
                  component={Link}
                  to={isAuthenticated ? "/dashboard" : "/auth"}
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: 'white',
                    color: '#2563eb',
                    px: 6,
                    py: 2,
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    borderRadius: 3,
                    boxShadow: '0 8px 25px rgba(255,255,255,0.3)',
                    '&:hover': { 
                      bgcolor: '#f8fafc',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {isAuthenticated ? "📊 Go to Dashboard" : "🚀 Start Free Today"}
                </Button>
              </Box>
            </Grid>

            {/* Right Side - Product Summary */}
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 4,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: 3
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
                  🎯 What You Get
                </Typography>
                
                <List>
                  {benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ py: 0.5 }}>
                      <ListItemIcon>
                        <CheckCircle sx={{ color: '#10b981', fontSize: 24 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit}
                        primaryTypographyProps={{
                          fontSize: '1.1rem',
                          fontWeight: 500
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Box sx={{ mt: 3, textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ fontStyle: 'italic', opacity: 0.9 }}>
                    "Trusted by legal professionals and individuals worldwide"
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: '#1e293b' }}>
          How LegAssist Works
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 6 }}>
          Get professional legal assistance in three simple steps
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Chat sx={{ fontSize: 60, color: '#2563eb', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                1. Ask Your Question
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Simply type your legal question in plain English. Our AI understands complex legal queries.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Analytics sx={{ fontSize: 60, color: '#2563eb', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                2. AI Analysis
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our advanced AI analyzes your query against thousands of legal precedents and regulations.
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CloudDone sx={{ fontSize: 60, color: '#2563eb', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                3. Get Instant Answer
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Receive comprehensive, professional legal guidance instantly with actionable insights.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography 
          variant="h3" 
          textAlign="center" 
          sx={{ fontWeight: 'bold', mb: 6, color: '#1e293b' }}
        >
          Why Choose LegAssist?
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card 
                sx={{ 
                  textAlign: 'center', 
                  p: 3, 
                  height: '100%',
                  border: '2px solid transparent',
                  '&:hover': {
                    border: '2px solid #93c13cff',
                    transform: 'translateY(-5px)',
                    boxShadow: '0 20px 40px rgba(37,99,235,0.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <CardContent>
                  <Box sx={{ mb: 3 }}>
                    {feature.icon}
                  </Box>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          bgcolor: '#f8fafc',
          py: 8,
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, color: '#1e293b' }}>
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Join thousands of users who trust LegAssist for their legal needs
          </Typography>
          
          <Button
            component={Link}
            to={isAuthenticated ? "/dashboard" : "/auth"}
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color:'#dfe1e7ff',
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              fontWeight: 'bold',
              borderRadius: 3,
              '&:hover': { 
                bgcolor: 'yellow',
                transform: 'translateY(-2px)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {isAuthenticated ? "Go to Dashboard" : "Start Your Free Trial"}
          </Button>
        </Container>
      </Box>

      {/* Simple Footer */}
      <Box
        sx={{
          bgcolor: '#1e293b',
          color: 'white',
          py: 6,
          width: '100%',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            ⚖️ LegAssist
          </Typography>
          <Typography variant="body1" color="grey.400" sx={{ mb: 4 }}>
            Your trusted AI-powered legal assistant
          </Typography>
          
          <Grid container spacing={4} justifyContent="center">
            <Grid item>
              <Typography variant="body1" color="grey.400">
                📧 support@legassist.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="grey.400">
                📞 +1 (555) 123-4567
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="grey.400">
                📍 Legal District, NY
              </Typography>
            </Grid>
          </Grid>

          <Typography variant="body2" color="grey.500" sx={{ mt: 4 }}>
            © 2025 LegAssist. All rights reserved. | Built with ❤️ using React & Material UI
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
