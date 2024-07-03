import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Movie = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 4450 ,maxHeight:8234,marginTop:'3%' }}>
      <CardMedia
        component="img"
        alt="poster"
        height="550"
        width="300"
        image="despicableme.jpeg"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          Despicable me
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Despicable Me is an American media franchise created by Sergio Pablos, Cinco Paul and Ken Daurio. It centers on a former supervillain turned secret agent named Gru, his adoptive daughters, Margo, Edith, and Agnes, and his yellow-colored Minions. The franchise is produced by Illumination and distributed by its parent company Universal Pictures.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default Movie;
