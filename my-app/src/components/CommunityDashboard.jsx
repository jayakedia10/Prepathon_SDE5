import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Flight, Place, Edit, Add } from '@mui/icons-material';
import { mapboxgl } from 'mapbox-gl';
import ReactMapGl, { Marker, Source, Layer, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Call } from '@mui/icons-material';
import MapboxAutocomplete from "react-mapbox-autocomplete";
import { useCallback } from 'react';
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Card } from '@mui/material';
import ArcGlobe from './ArcGlobe';
import { DepartureBoard } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import { AddRoad } from '@mui/icons-material';
import { HourglassBottom } from '@mui/icons-material';
import { TaxiAlert } from '@mui/icons-material';
import { ListItemTextExtended, ListItemSecondaryActionExtended } from 'mui-listitem-extended'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import SimpleGlobe from './SimpleGlobe';
import ButtonAppBar from './NavBar';



const TripDashboard = () => {
  const items = [1, 2, 3, 4, 5, 6, 7];
  const data = [
    // Your data with avatars, names, and any other relevant information.
    // Example data structure:
    { id: 1, name: 'John Doe', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Mark Oing', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 3, name: 'Steve John', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 4, name: 'Bob Smith', avatarUrl: 'https://example.com/avatar1.jpg' },
    // Add 77 more entries here...
  ];
  const containerStyle = {
    width: '800px', // Set the width to 300px
    height: '500px', // Set the height to 300px
    overflow: 'hidden', // Hide any overflow content beyond the container
    position: 'relative', // Set the position to relative
  };

  const globeStyle = {
    position: 'absolute', // Set the position of the globe to absolute
    left: '50%', // Center horizontally
    top: '50%', // Center vertically
    transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
  };

  return (
    <>
    <Container style={{ marginTop: '16px' }}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ alignItems: 'center' }}>
            <Typography variant="h4" color="textSecondary" style={{ color: 'rgb(67, 67, 136)', fontWeight: '900', marginLeft: '0%' }}>
              Rouvers Community
            </Typography>
            <Typography variant="h6" color="textSecondary" style={{ fontWeight: '900', marginRight: '14%' }}>
              The Rovers Community is a vibrant and inclusive travel network where adventure enthusiasts and explorers come together to exchange stories, plan trips, and build connections with fellow travelers, creating a dynamic and supportive community for all types of adventures.
            </Typography>
          </div>
          <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '16px', marginTop: '4%', flexBasis: '75%', marginLeft: '0%' }}>
            <Grid item xs={12} md={12}>
              <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'bolder' }}>
                <Person style={{ color: 'green' }} />Total Members : 368
              </Typography>
              <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'bolder' }}>
                <Person style={{ color: 'red' }} /> Currently Travelling: 83
              </Typography>
            </Grid>
          </Card>
        </div>
        <Typography variant="h4" color="textPrimary" style={{ color: 'rgb(67, 67, 136)', fontWeight: 'normal', position: 'relative', fontFamily: 'fantasy', marginBottom: '20px', marginTop: '20px', marginLeft: '20px' }}>
          Active Trips
        </Typography>
        <Grid container spacing={3} alignItems="center">
          {/* Trip Info */}
          {[1, 2, 3, 4, 5, 6, 7].map((entry) => (
            <TableRow key={entry} style={{ marginTop: '20px' }}>
              <TableCell>
                <Card style={{ backgroundColor: 'BurlyWood', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: ' 60px', marginRight: '300px', width: '130%', paddingLeft: '30px' }}>
                  <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '65%' }}>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'normal', position: 'relative', fontFamily: 'fantasy' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'green' }}
                          />
                          Prayagraj
                          <div
                            style={{
                              marginLeft: '100%',
                              position: 'absolute',
                              backgroundColor: 'black', // Change this to the color you want for the connector
                              height: '2px', // Adjust the height of the connector line
                              width: '430%', // The connector spans the entire width of the container
                              top: '50%',
                              transform: 'translateY(-50%)',
                              left: '20%', // Adjust this value to set the marker position
                              borderRadius: '50%',
                              animation: 'blink 1s infinite',
                            }}
                          >
                            <div
                              style={{
                                marginLeft: '30%',
                                position: 'absolute',
                                backgroundColor: 'blue', // Change this to the color you want for the circle
                                width: '20px', // Adjust the size of the circle
                                height: '20px', // Adjust the size of the circle
                                borderRadius: '50%',
                                top: '-8px', // Adjust the vertical position of the circle
                                left: '0%', // Set the circle at 20% of the connector
                              }}
                            />
                          </div>
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'normal', position: 'relative', fontFamily: 'fantasy' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'red' }}
                          />
                          Patna
                        </Typography>
                      </div>
                      <Button variant="contained" color="primary" style={{ float: 'right', marginLeft: '40px', marginRight: '20px' }}>
                        Join
                      </Button>
                    </div>

                  </Grid>
                  <div style={{ marginLeft: '200px' }}>

                  </div>
                </Card>
              </TableCell>
            </TableRow>
          ))}

          {/* Trip Details */}

          {/* Description */}
          <Grid item xs={12} md={12}>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ textAlign: 'center', padding: '16px 0' }}
            >

              Embark on a 215-kilometer road journey from Prayagraj to Patna, India. Along the way, explore cultural treasures like Chunar Fort and the Sonepur Cattle Fair, leading to the historic capital city of Patna, where you can visit Golghar, Patna Museum, and savor local Bihari cuisine.
            </Typography>
          </Grid>


        </Grid>
        <div style={{ display: 'flex' }}>
        <Typography variant="h4" color="textPrimary" style={{ color: 'rgb(67, 67, 136)', fontWeight: 'normal', position: 'relative', fontFamily: 'fantasy', marginBottom: '20px', marginTop: '20px', marginLeft: '20px',marginRight:'50%' }}>
          Members
        </Typography>
        <Typography variant="h4" color="textPrimary" style={{ color: 'rgb(67, 67, 136)', fontWeight: 'normal', position: 'relative', fontFamily: 'fantasy', marginBottom: '20px', marginTop: '20px', marginLeft: '260%px' }}>
            Popular Destinations
        </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          <Card style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow effect
            margin: 'auto', // Center the card horizontally
            marginTop: '20px',
            marginLeft:'20px' // Add some top margin
          }}>
            <div style={containerStyle}>
              <div style={globeStyle}>
                <SimpleGlobe />
              </div>
            </div>
          </Card>

        </div>
      </Paper>
    </Container>
    </>
  );
};

export default TripDashboard;
