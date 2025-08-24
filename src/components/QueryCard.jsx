import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Chip,
  Stack
} from '@mui/material';
import {
  Delete as DeleteIcon,
  Schedule,
  Today,
  Gavel
} from '@mui/icons-material';

const QueryCard = ({ query, onDelete }) => {
  return (
    <Card
      sx={{
        mb: 2,
        borderLeft: '4px solid',
        borderLeftColor: 'primary.main',
        '&:hover': {
          boxShadow: 2
        },
        transition: 'box-shadow 0.3s ease'
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Box flex={1} mr={2}>
            <Box display="flex" alignItems="center" mb={1}>
              <Gavel sx={{ color: 'primary.main', mr: 1, fontSize: 20 }} />
              <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                Legal Query
              </Typography>
            </Box>
            
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
              {query.text}
            </Typography>

            <Stack direction="row" spacing={1}>
              <Chip
                icon={<Today />}
                label={query.date}
                size="small"
                variant="outlined"
              />
              <Chip
                icon={<Schedule />}
                label={query.time}
                size="small"
                variant="outlined"
              />
            </Stack>
          </Box>

          <IconButton
            onClick={() => onDelete(query.id)}
            color="error"
            size="small"
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default QueryCard;
