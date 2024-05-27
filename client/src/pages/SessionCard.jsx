import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const SessionCard = ({ title, description, image,active }) => {
  return (
    <Card sx={{ maxWidth: 500,width:300 }}>
      <button className={`btn ${active?"btn-sucess":"btn-danger"}`}>active</button>
      <CardActionArea>
        <div className='d-flex justify-content-center'>
        <img
          src={image}
          height="140"
          width="190"
          style={{objectFit:"cover"}}
        />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='text-center text-dark'>
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
