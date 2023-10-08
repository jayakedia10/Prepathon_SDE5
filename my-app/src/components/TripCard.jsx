import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 222, maxHeight: 305 }} style={{flex: '0 0 auto', border: '#1babfe solid 0.6px'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="155"
          image={props.destination}
          alt="hello"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.destinationName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
