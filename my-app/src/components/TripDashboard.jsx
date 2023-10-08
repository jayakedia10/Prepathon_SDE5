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

const TripDashboard = () => {

  const data = [
    // Your data with avatars, names, and any other relevant information.
    // Example data structure:
    { id: 1, name: 'John Doe', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Mark Oing', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 3, name: 'Steve John', avatarUrl: 'https://example.com/avatar1.jpg' },
    { id: 4, name: 'Bob Smith', avatarUrl: 'https://example.com/avatar1.jpg' },
    // Add 77 more entries here...
  ];
  const [status, setStatus] = useState(1);
  const [coords, setCoords] = useState([]);
  const [start, setStart] = useState([81.8838500, 25.42012000]);
  const [end, setEnd] = useState([85.10103, 25.61538]);
  const [viewport, setViewport] = useState({
    latitude: 25.42012000,
    longitude: 83.8838500,
    width: '70vw',
    height: '70vh',
    zoom: 7,
  });
  const geojson = {
    "type": "FeatureCollection",
    "features": [{
      "type": "feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          ...coords
        ]
      }
    }]
  }
  const lineStyle = {
    id: 'roadLayer',
    type: 'line',
    layout: {
      "line-join": "round",
      "line-cap": "round"
    },
    paint: {
      "line-color": "blue",
      "line-width": 4,
      "line-opacity": 0.75
    }
  };
  const shadowStyle = {
    boxShadow: '10px 12px 50px rgba(0.5, 10, 5, 0.3)', // Customize . shadow values
    padding: '16px',
    maxWidth: "850px", margin: "10px ",
    justifyContent: 'center',
    marginBottom: "100px"

  };

  const geolocateControlRef = useCallback((ref) => {
    if (ref) {
      ref.on('geolocate', (event) => {
        console.log('Current position coordinates:', event.coords);
      });
    }
  }, []);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log('Current position coordinates:', latitude, longitude);
      });
    }
  }, []);
  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q`
    );
    const data = await response.json();
    console.log(data);
    const time = data.routes[0].duration;
    const dis = data.routes[0].distance;
    const coords = data.routes[0].geometry.coordinates;
    setCoords(coords);
  };
  useEffect(() => {
    getRoute();
  }, []);

  return (
    <Container style={{ marginTop: '16px' }}>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h4" color="textSecondary" style={{ color: 'rgb(67, 67, 136)', fontWeight: '900', marginLeft: '4%' }}>
            North India Trip
          </Typography>
          <Grid style={{ marginLeft: '4%', marginTop: "20px", width: '30%', height: '80px' }}>
            <Paper elevation={3} style={{ padding: '8px', backgroundColor: 'lightgreen', boxShadow: '10px 12px 50px rgba(0, 5, 0, 0.3)' }}>
              <Typography variant="h5" color="textSecondary" style={{ fontWeight: 'bold' }}>
                Estimated Arrival Time
              </Typography>
              <Typography variant="h6" color="textPrimary">
                <div style={{ display: 'flex', alignItems: 'center', padding: '5px' }}><HourglassBottom />{ }   <div style={{ marginLeft: '5px' }}>4 hours and 38 Minutes</div></div>

              </Typography>
            </Paper>
          </Grid>
          <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '16px', marginTop: '4%', flexBasis: '25%', marginLeft: '5%' }}>
            <Grid item xs={12} md={12}>
              <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'bolder' }}>
                <Person style={{ color: 'green' }} />Travellers : 22
              </Typography>
              <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'bolder' }}>
                <Person style={{ color: 'red' }} /> Allowed Capacity: 30
              </Typography>
            </Grid>
          </Card>
        </div>
        <Grid container spacing={3} alignItems="center">
          {/* Trip Info */}
          <Card style={{ backgroundColor: 'rgb(180, 97, 150)', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', padding: '16px', marginLeft: '5%', marginRight: '4%', marginTop: '5%', flexBasis: '100%', opacity: '90%' }}>
            <Grid item xs={12} md={12}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '65%' }}>
                  <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'normal', position: 'relative',fontFamily:'fantasy' }}>
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
                        width: '320%', // The connector spans the entire width of the container
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
                  <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'normal', position: 'relative',fontFamily:'fantasy'  }}>
                    <Place
                      style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'red' }}
                    />
                    Patna
                  </Typography>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'normal', position: 'relative', marginRight: '60%',boxShadow: '10px 10px 100px rgba(0, 10, 10, 10)',borderRadius:'4px',paddingRight:'60px',paddingLeft:'60px' }}>
                  <div style={{ alignItems: 'center' }}><DepartureBoard style={{ height: '45px', width: '45px', marginLeft: '20%', color: 'green' }} />{ }   <div style={{ marginLeft: '5px',marginTop:'10px',padding:'5px',fontWeight:'bold'  }}>16:30</div></div>
                </Typography>
                <Typography variant="h6" color="textPrimary" style={{ fontWeight: 'normal', position: 'relative',boxShadow: '10px 10px 100px rgba(0, 10, 10, 10)',borderRadius:'4px',paddingRight:'60px',paddingLeft:'60px' }}>
                  <div style={{ alignItems: 'center' }}><DepartureBoard style={{ height: '45px', width: '45px', marginLeft: '20%', color: 'red' }} />{ }  <div style={{ marginLeft: '5px',marginTop:'10px',padding:'5px',fontWeight:'bold' }}>4:30</div>
                  </div>
                </Typography>
              </div>
              <Typography variant="h6" color="textSecondary" style={{ display: 'flex', marginTop: '8px', marginLeft: '40%', fontWeight: 'bolder' }}>
                <Place
                  style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'darkblue' }}
                />Current location:
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                style={{ display: 'flex', alignItems: 'center', marginTop: '8px', marginLeft: '40%',fontFamily:'monospace' }}
              >

                Varanasi
              </Typography>

              <Typography variant="h6" color="textSecondary" style={{ display: 'flex', marginTop: '8px', marginLeft: '40%', fontWeight: 'bolder' }}>
                <Place
                  style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'orange' }}
                />Next Stoppage:
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                style={{ display: 'flex', alignItems: 'center', marginTop: '8px', marginLeft: '40%',fontFamily:'monospace' }}
              >

                Mughal Sarai
              </Typography>

              <Typography variant="h6" color="textSecondary" style={{ marginTop: '8px', marginLeft: '40%', fontWeight: 'bolder' }}>
                <AddRoad style={{ height: '30px', width: '30px', color: 'black' }} />  Distance Left:
              </Typography>
              <Typography
                variant="h4"
                color="primary"
                style={{ display: 'flex', alignItems: 'center', marginTop: '8px', marginLeft: '40%',fontFamily:'monospace' }}
              >
                326 Kilometres
              </Typography>
            </Grid>
          </Card>

          {/* Trip Details */}

          {/* Description */}
          <Grid item xs={12} md={12} style={{ marginLeft: '2%' }}>
            <ReactMapGl
              {...viewport}
              mapboxApiAccessToken='pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q'
            >
              <Source id="routeSource" type="geojson" data={geojson}>
                <Layer {...lineStyle} />
              </Source>
              <GeolocateControl ref={geolocateControlRef}></GeolocateControl>
              {/* <FullscreenControl /> */}
              {/* <NavigationControl /> */}
              <Marker longitude={81.7838500} latitude={25.6601} anchor="bottom" >
                <img src="https://tse3.mm.bing.net/th?id=OIP.h3Nn1v7EiKFjdXvtvnarEQHaK5&pid=Api&P=0&h=180" style={{ width: '30px', height: '50px' }} />
              </Marker>
              <Marker longitude={85.101} latitude={25.845} anchor="bottom" >
                <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" style={{ width: '30px', height: '50px' }} />
              </Marker>
            </ReactMapGl>
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography
              variant="body1"
              color="textSecondary"
              style={{ textAlign: 'center', padding: '16px 0' }}
            >
              
Embark on a 215-kilometer road journey from Prayagraj to Patna, India. Along the way, explore cultural treasures like Chunar Fort and the Sonepur Cattle Fair, leading to the historic capital city of Patna, where you can visit Golghar, Patna Museum, and savor local Bihari cuisine.
            </Typography>
            <Button variant="outlined" color="primary" style={{ margin: '16px auto', display: 'block' }}>
              Show more
            </Button>
          </Grid>
          <TableContainer component={Paper} style={{ marginLeft: '30%', width: '40%',color:'rgb(67, 67, 136)' }}>
            <Table>
              <TableHead style={{ backgroundColor: 'rgb(180, 97, 150)', color: '#fff' }}>
                <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Call</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Avatar alt={row.name} src={row.avatarUrl} />
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        style={{ backgroundColor: '#F44336', color: '#fff' }}
                        startIcon={<Call />}
                      >
                        Call
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>


        </Grid>
      </Paper>
    </Container>
  );
};

export default TripDashboard;
