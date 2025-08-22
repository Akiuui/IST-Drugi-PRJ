import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function MyCard({header, body, img, maxWidth = "100vw"}) {

  return (
    <Card sx={{ maxWidth: maxWidth }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {header}
        </Typography>
        <Typography style={{whiteSpace: "pre-line"}} variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MyCard