import React, { useState } from 'react'
import './Tripform.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { AiFillCar } from "react-icons/ai";
import { FaTrain, FaPlaneDeparture } from "react-icons/fa";

const AddTripForm = () => {

  const [selectedButton, setSelectedButton] = useState(null);
  const shadowStyle = {
    boxShadow: '10px 12px 50px rgba(0.5, 10, 5, 0.3)', // Customize . shadow values
    padding: '16px', 
    maxWidth: "850px", margin: "10px ",
    justifyContent: 'center',
    marginBottom:"100px"
    
  };


  return (
    <>
      <div className="App">
        <h3 className='head' style={{ color: 'rgb(67, 67, 136)', fontWeight: '900' }}>
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
                    <TextField placeholder="Enter Trip Name" label="Trip Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={4} item>
                    <TextField type="number" placeholder="Enter trip size" label="Trip size" variant="outlined" fullWidth required />
                  </Grid>

                  <Grid item xs={12} style={{ margin: "10px" }}>
                    <h2 style={{ color: 'rgb(67, 67, 136)' }}> Choose travel mode:</h2>
                    <div className='modes'>
                      <Button
                        style={{ padding: '20px', width: '150px' }}
                        variant={selectedButton === 1 ? "contained" : "outlined"}
                        onClick={() => setSelectedButton(1)}
                      >
                        Road <AiFillCar className='mode-icon' style={{ marginLeft: '10px' }} />
                      </Button>
                      <Button
                        style={{ padding: '20px', width: '150px' }}
                        variant={selectedButton === 2 ? "contained" : "outlined"}
                        onClick={() => setSelectedButton(2)}
                      >
                        Train <FaTrain className='mode-icon' style={{ marginLeft: '10px' }} />
                      </Button>
                      <Button
                        style={{ padding: '20px', width: '150px' }}
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
                        <TextField placeholder="Start location" label="Start location" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField placeholder="End location" label="End location" variant="outlined" fullWidth required />
                      </Grid>

                    </div>


                  </Grid>
                  <Grid item xs={12} style={{ margin: "10px" }}>
                    <h2 style={{ color: 'rgb(67, 67, 136)' }}>Choose dates:</h2>
                    <div style={{ display: "flex", gap: '10px' }}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          inputProps={{ maxLength: 8 }}
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
  )
}

export default AddTripForm