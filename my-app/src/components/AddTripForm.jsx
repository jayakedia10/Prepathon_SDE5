import React, { useEffect, useState } from 'react';
import ReactMapGl, { Marker, Source, Layer, GeolocateControl, FullscreenControl, NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxAutocomplete from "react-mapbox-autocomplete";
import './Tripform.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { AiFillCar } from "react-icons/ai";
import { FaTrain, FaPlaneDeparture } from "react-icons/fa";



function AddTripForm() {

  const [selectedButton, setSelectedButton] = useState(null);
  const [tripName, setTripName] = useState('');
  const [tripSize, setTripSize] = useState();
  const [departureDate, setDepatureDate] = useState(new Date());
  const [privacy, setPrivacy] = useState([]);
  const [tripStatus, setTripStatus] = useState('');
  const [start, setStart] = useState([78.1772, 26.2124]);
  const [end, setEnd] = useState([70.1772, 26.2124]);
  const [coords, setCoords] = useState([]);
  const [distance, setDistance] = useState([0, 0]);
  const [duration, setDuration] = useState([0, 0]);

  useEffect(() => {
    getRoute();
  }, [end, start]);

  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q`
    );
    const data = await response.json();
    const time = data.routes[0].duration;
    const dis = data.routes[0].distance;
    setDuration([Math.floor(time / 3600), Math.floor((time % 3600) / 60)]);
    setDistance([Math.floor(dis / 1000), Math.floor((dis % 100))]);
    const coords = data.routes[0].geometry.coordinates;
    setCoords(coords);
  };
  function _suggestionSelectStart(result, lat, long, text) {
    setStart([long, lat]);
  }
  function _suggestionSelectEnd(result, lat, long, text) {
    setEnd([long, lat]);
  }
  function handleSubmit() {
    
  }
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
  const [viewport, setViewport] = useState({
    latitude: 26.2124,
    longitude: 78.1772,
    width: '50vw',
    height: '50vh',
    zoom: 5,
  });

  return (
    <>
      <>
        <div className="App">
          <h3 className='head' style={{ color: 'rgb(67, 67, 136)', fontWeight: '900', marginLeft:'40%' }}>
            Create Trip
          </h3>
          <Grid container justifyContent="center">
            <Card style={shadowStyle} >
              <CardContent >

                <Typography variant="body2" color="textSecondary" component="p" gutterBottom style={{ marginBottom: '10px' }}>
                  Enter trip details and proceed to create
                </Typography>
                <form>
                  <Grid container spacing={1}>
                    <Grid xs={12} sm={8} item>
                      <TextField value={tripName} placeholder="Enter Trip Name" label="Trip Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={4} item>
                      <TextField value={tripSize} type="number" placeholder="Enter trip size" label="Trip size" variant="outlined" fullWidth required />
                    </Grid>

                    <Grid item xs={12} style={{ margin: "10px" }}>
                      <h2 style={{ color: 'rgb(67, 67, 136)' }}> Choose travel mode:</h2>
                      <div className='modes'>
                        <Button
                          style={{ padding: '20px', width: '250px' }}
                          variant={selectedButton === 1 ? "contained" : "outlined"}
                          onClick={() => setSelectedButton(1)}
                        >
                          Road <AiFillCar className='mode-icon' style={{ marginLeft: '10px' }} />
                        </Button>
                        <Button
                          style={{ padding: '20px', width: '250px' }}
                          variant={selectedButton === 2 ? "contained" : "outlined"}
                          onClick={() => setSelectedButton(2)}
                        >
                          Train <FaTrain className='mode-icon' style={{ marginLeft: '10px' }} />
                        </Button>
                        <Button
                          style={{ padding: '20px', width: '250px' }}
                          variant={selectedButton === 3 ? "contained" : "outlined"}
                          onClick={() => setSelectedButton(3)}
                        >
                          Flight <FaPlaneDeparture className='mode-icon' style={{ marginLeft: '10px' }} />
                        </Button>

                      </div>
                    </Grid>
                    <Grid item xs={12} style={{ margin: "10px" }}>
                      <h2 style={{ color: 'rgb(67, 67, 136)' }}>Choose Locations:</h2>
                      <div style={{ display: "flex", justifyContent: 'space-evenly', gap: '10px' }}>

                        <Grid xs={12} sm={6} item>
                          <MapboxAutocomplete
                            publicKey="pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q"
                            inputClass="form-control search"
                            onSuggestionSelect={_suggestionSelectStart}
                            country="IN"
                            resetSearch={false}
                            placeholder="Search Address..."
                          />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                          <MapboxAutocomplete
                            publicKey="pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q"
                            inputClass="form-control search"
                            onSuggestionSelect={_suggestionSelectEnd}
                            country="IN"
                            resetSearch={false}
                            placeholder="Search Address..."
                          />
                        </Grid>


                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <p><span style={{ fontWeight: 'bold', color: 'rgb(67, 67, 136)' }}>Distance: {distance[0]} Km and {distance[1]} metres</span> </p>
                        <p><span style={{ fontWeight: 'bold', color: 'rgb(67, 67, 136)' }}>Estimated Time:{duration[0]} Hours and {duration[1]} minutes</span> </p>

                      </div>
                      <ReactMapGl
                        {...viewport}
                        mapboxApiAccessToken='pk.eyJ1Ijoicm9hc3RlcnMwNSIsImEiOiJjbGx1amU5M2QxY3psM3FwcGtiM3NkaDdlIn0.V82yHMQKe9eWRTWbN9MH8Q'
                      >
                        <Source id="routeSource" type="geojson" data={geojson}>
                          <Layer {...lineStyle} />
                        </Source>
                        <FullscreenControl />
                        <GeolocateControl />
                        <NavigationControl />
                        <Marker longitude={78.1772} latitude={26.2124} anchor="bottom" >
                          <img src="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
                        </Marker>
                      </ReactMapGl>

                    </Grid>
                    <Grid item xs={12} style={{ margin: "10px" }}>
                      <h2 style={{ color: 'rgb(67, 67, 136)' }}>Choose dates:</h2>
                      <div style={{ display: "flex", gap: '10px' }}>
                        <Grid xs={12} sm={6} item>
                          <TextField
                            inputProps={{ maxLength: 8 }}
                            value={departureDate}
                            placeholder="DD/MM/YYYY" label="Start date" variant="outlined"
                            fullWidth required />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                          <TextField
                            inputProps={{ maxLength: 8 }}
                            placeholder="DD/MM/YYYY"
                            label="End date" variant="outlined" fullWidth required />
                        </Grid>
                      </div>


                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        style={{ padding: '20px' }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        onSubmit={handleSubmit}
                        fullWidth>
                        CREATE TRIP
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </>
    </>
  );
}

export default AddTripForm;
