import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SessionCard = ({ title, description, image }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <img
          src={image}
          height="140"
          width="190"
          style={{objectFit:"cover"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SessionCard;
