//Create the Home UI for the BlogAPP(Cards are preferrred; You may choose your UI preference )

import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Add from './Add'

const Home = () => {
  return (
    <>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: 3,
        padding: 3,
        justifyContent: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Card sx={{ width: '30%', minWidth: '300px' }}>
          <CardMedia
            sx={{ height: 200 }}
            image="../images/travel.jpg"
            title="Travel"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Travel
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Travel the world!!!!!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: '#9C27B0' }}>DELETE</Button>
            <Button size="small" sx={{ color: '#9C27B0' }}>UPDATE</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '30%', minWidth: '300px' }}>
          <CardMedia
            sx={{ height: 200 }}
            image="../images/painting.jpg"
            title="Art"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Art
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Art!!!!!!!!!!!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: '#9C27B0' }}>DELETE</Button>
            <Button size="small" sx={{ color: '#9C27B0' }}>UPDATE</Button>
          </CardActions>
        </Card>

        <Card sx={{ width: '30%', minWidth: '300px' }}>
          <CardMedia
            sx={{ height: 200 }}
            image="../images/food.jpg"
            title="Food"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Food
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Food is Art!!!!
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" sx={{ color: '#9C27B0' }}>DELETE</Button>
            <Button size="small" sx={{ color: '#9C27B0' }}>UPDATE</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default Home

//Write your code here