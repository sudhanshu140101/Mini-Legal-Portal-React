import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { saveQuery, getQueries, deleteQuery } from '../utils/localStorage';
import QueryCard from '../components/QueryCard';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Avatar,
  Card,
  CardContent,
  Stack
} from '@mui/material';
import { Send, Email, TrendingUp, Today } from '@mui/icons-material';

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [queries, setQueries] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth');
      return;
    }
    setQueries(getQueries());
  }, [isAuthenticated, navigate]);

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    if (!newQuery.trim()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const savedQuery = saveQuery(newQuery.trim());
      setQueries(prevQueries => [savedQuery, ...prevQueries]);
      setNewQuery('');
      setIsSubmitting(false);
    }, 500);
  };

  const handleDeleteQuery = (queryId) => {
    deleteQuery(queryId);
    setQueries(prevQueries => prevQueries.filter(query => query.id !== queryId));
  };

  if (!isAuthenticated) {
    return null;
  }

  const todayQueries = queries.filter(q => 
    new Date(q.date).toDateString() === new Date().toDateString()
  ).length;

  return (
    <Box 
      sx={{ 
        minHeight: 'calc(100vh - 64px)', 
        py: 4, 
        bgcolor: '#f8fafc',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#1e293b' }}>
            📊 Legal Dashboard
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Welcome back, {user.name}! Manage your legal queries and get instant assistance.
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {/* Left Column - Profile & New Query */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={4}>
              {/* User Profile */}
              <Paper 
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  👤 Profile
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Avatar 
                    sx={{ 
                      width: 100, 
                      height: 100, 
                      mb: 3, 
                      bgcolor: 'primary.main',
                      fontSize: '2.5rem',
                      boxShadow: '0 8px 25px rgba(37,99,235,0.3)'
                    }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </Avatar>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    {user.name}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Email sx={{ fontSize: 18, mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body1" color="text.secondary">
                      {user.email}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="primary.main" sx={{ fontWeight: 600 }}>
                    ✨ Premium Member
                  </Typography>
                </Box>
              </Paper>

              {/* Stats */}
              <Paper 
                sx={{ 
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}>
                  📈 Quick Stats
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Card sx={{ 
                      textAlign: 'center', 
                      p: 3, 
                      bgcolor: 'primary.main', 
                      color: 'white',
                      borderRadius: 2
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                        {queries.length}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Total Queries
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={6}>
                    <Card sx={{ 
                      textAlign: 'center', 
                      p: 3, 
                      bgcolor: 'success.main', 
                      color: 'white',
                      borderRadius: 2
                    }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                        {todayQueries}
                      </Typography>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Today
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </Paper>

              {/* New Query Form */}
              <Paper 
                sx={{ 
                  p: 4,
                  borderRadius: 3,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
              >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, textAlign: 'center', mb: 3 }}>
                  ❓ Ask a Legal Question
                </Typography>
                <Box component="form" onSubmit={handleSubmitQuery}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    value={newQuery}
                    onChange={(e) => setNewQuery(e.target.value)}
                    placeholder="Describe your legal question in detail. Be specific about your situation for better assistance..."
                    variant="outlined"
                    disabled={isSubmitting}
                    sx={{ mb: 3 }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    size="large"
                    disabled={!newQuery.trim() || isSubmitting}
                    endIcon={<Send />}
                    sx={{
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      borderRadius: 2,
                      '&:hover': {
                        transform: 'translateY(-1px)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {isSubmitting ? '💭 Processing...' : '🚀 Submit Query'}
                  </Button>
                </Box>
              </Paper>
            </Stack>
          </Grid>

          {/* Right Column - Queries */}
          <Grid item xs={12} lg={8}>
            <Paper 
              sx={{ 
                p: 4, 
                minHeight: 500,
                borderRadius: 3,
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 4, textAlign: 'center' }}>
                📋 Your Legal Query History
              </Typography>
              
              {queries.length > 0 ? (
                <Box>
                  {queries.map((query) => (
                    <QueryCard
                      key={query.id}
                      query={query}
                      onDelete={handleDeleteQuery}
                    />
                  ))}
                </Box>
              ) : (
                <Box sx={{ textAlign: 'center', py: 10 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>📝</Typography>
                  <Typography variant="h5" color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                    No Legal Queries Yet
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Start by asking your first legal question using the form on the left!
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                    💡 Tip: Be specific about your legal situation for more accurate guidance
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;
