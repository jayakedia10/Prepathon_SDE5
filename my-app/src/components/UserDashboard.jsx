import { Container,Card,Typography, List, ListItem, Divider, ListItemText, ListItemAvatar,Avatar,Button,Grid } from '@mui/material';
import React, { useState } from 'react'
import styled from 'styled-components';
import TripCard from './TripCard'
import ArcGlobe from './ArcGlobe';
import { Flight, Place, Edit, Add } from '@mui/icons-material';
import { House } from '@mui/icons-material';
import { MonetizationOn } from '@mui/icons-material';

export default function userProfilePage() {

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
    <BodyContainer >
        <ProfileContainer style={{borderRadius:'6px'}}>
            <CoverPic/>
            <ProfilePic>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="" />
                <div>
                    <h3>
                        Samantha Freedman
                    </h3>
                    <ul>
                        <li>samantha.freedman@gmail.com</li>
                        <li>9876534321</li>
                        <li>Texas, USA</li>
                    </ul>
                    <div style={{display:'flex',fontSize:'12px'}}>
                    <Typography variant="h4" color="textPrimary" style={{ fontSize:'12px', position: 'relative',fontFamily:'sans-serif',marginTop:'10px' }}>
                        
                    </Typography>
                    <Typography variant="h4" color="textPrimary" style={{ fontSize:'17px', position: 'relative',fontFamily:'sans-serif' }}>
                    <Place
                      style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'green' }}
                    />
                    Most Visisted : Prayagraj
                    </Typography>
                    <Typography variant="h4" color="textPrimary" style={{ fontSize:'17px', position: 'relative',fontFamily:'sans-serif' }}>
                    <House
                      style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'brown' }}
                    />
                    Current Location : Varanasi
                    </Typography>
                    <Typography variant="h4" color="textPrimary" style={{ fontSize:'17px', position: 'relative',fontFamily:'sans-serif' }}>
                    <MonetizationOn
                      style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'bold', color: 'yellow' }}
                    />
                    Total Spendings : $15,383
                    </Typography>
                    </div>
                </div>

            </ProfilePic>
        </ProfileContainer>
        <div style={{ display: 'flex' }}>
        <Typography variant="h4" color="textPrimary" style={{ color: 'rgb(67, 67, 136)', fontWeight: 'bold', position: 'relative', fontFamily: 'sans-serif', marginBottom: '20px', marginTop: '20px', marginLeft: '20px',marginRight:'50%' }}>
          Past Trips
        </Typography>
        <Typography variant="h4" color="textPrimary" style={{ color: 'rgb(67, 67, 136)', fontWeight: 'bold', position: 'relative', fontFamily: 'sans-serif', marginBottom: '20px', marginTop: '20px', marginLeft: '260%px' }}>
            Your Year at a Glance
        </Typography>
        </div>
        <div style={{ display: 'flex' }}>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',paddingLeft:'20px' }}>
          <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: ' 10px', width: '100%', paddingLeft: '10px',marginBottom:'20px',marginTop:'10px' }}>
                  <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '20%' }}>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily: 'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'green' }}
                          />
                          Prayagraj
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily:'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'red' }}
                          />
                          Patna
                        </Typography>
                      </div>
                    </div>

                  </Grid>
                  <div style={{ marginLeft: '200px' }}>

                  </div>
                </Card>
                <Divider variant="inset" component="li" />
                <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: ' 10px', width: '100%', paddingLeft: '10px',marginBottom:'20px' }}>
                  <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '20%' }}>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily: 'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'green' }}
                          />
                          Prayagraj
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily:'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'red' }}
                          />
                          Patna
                        </Typography>
                      </div>
                    </div>

                  </Grid>
                  <div style={{ marginLeft: '200px' }}>

                  </div>
                </Card>
                <Divider variant="inset" component="li" />
                <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: ' 10px', width: '100%', paddingLeft: '10px',marginBottom:'20px' }}>
                  <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '20%' }}>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily: 'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'green' }}
                          />
                          Prayagraj
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily:'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'red' }}
                          />
                          Patna
                        </Typography>
                      </div>
                    </div>

                  </Grid>
                  <div style={{ marginLeft: '200px' }}>

                  </div>
                </Card>
                <Divider variant="inset" component="li" />
            <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: ' 10px', width: '100%', paddingLeft: '10px',marginBottom:'20px' }}>
                  <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '20%' }}>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily: 'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'green' }}
                          />
                          Prayagraj
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily:'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'red' }}
                          />
                          Patna
                        </Typography>
                      </div>
                    </div>

                  </Grid>
                  <div style={{ marginLeft: '200px' }}>

                  </div>
                </Card>
            <Divider variant="inset" component="li" />
            <Card style={{ backgroundColor: 'lightblue', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', marginLeft: ' 10px', width: '100%', paddingLeft: '10px' }}>
                  <Grid item xs={12} md={12}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ marginRight: '20%' }}>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily: 'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'green' }}
                          />
                          Prayagraj
                        </Typography>
                      </div>
                      <div>
                        <Typography variant="h4" color="textPrimary" style={{ fontWeight: 'lighter', position: 'relative', fontFamily:'sans-serif' }}>
                          <Place
                            style={{ marginRight: '2px', marginLeft: '2px', marginTop: '2px', fontSize: '2rem', fontWeight: 'lighter', color: 'red' }}
                          />
                          Patna
                        </Typography>
                      </div>
                    </div>

                  </Grid>
                  <div style={{ marginLeft: '200px' }}>

                  </div>
                </Card>
          </List>
          <Card style={{
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add a shadow effect
            margin: 'auto', // Center the card horizontally
            marginTop: '20px',
            marginLeft:'20px' // Add some top margin
          }}>
            <div style={containerStyle}>
              <div style={globeStyle}>
                <ArcGlobe />
              </div>
            </div>
          </Card>

        </div>

    </BodyContainer>
  )
}

const BodyContainer = styled.div`
    padding: 1% 12%;
    color: #383838;
    background-color: #f3faff;
    `

const ProfileContainer = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 1%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    `

const CoverPic = styled.div`
    width: 100%;
    height: 30vh;
    background:center center/cover no-repeat rgb(67, 67, 136);`

const ProfilePic = styled.div`
    width: 40vw;
    height: 30vh;;
    transform: translateY(-5vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    color: #383838;
    
    img{
        width: 10vw;
        height: 100%;
        border-radius: 50%;
        border: white solid 5px;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        h3{
        font-size: 1.5rem;
        margin: 0;
        font-weight: 400;
        letter-spacing: 1.5px;
        }

        ul{
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: center;
            width: 100%;
            gap: 10px;
            font-style: italic;
        }
    }
    
    p{
        margin: 0;

        a{
            width: 2.5vw;
            height: 2.5vw;

            img{
                width: 2.5vw;
                height: 2.5vw;
            }
        }
    }
    `

const TripContainer = styled.div`
    width: 100%;
    height: 60vh;
    margin-top: 2%;
    margin-bottom: 2%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    font-family: 'Roboto', sans-serif;
    background-color: white;
    border-radius: 10px;

    h2{
        color: #383838;
        font-weight: 400;
        font-size: 2rem;
        /* text-align: center; */
    }
    `

const PastTrips = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2%;
    background-color: white;
    `

const TripCardsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 2%;
  scrollbar-width: thin; 
  scrollbar-color: #1452FF transparent; //firefox
  &::-webkit-scrollbar { //chrome safari
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    /* background-color: #1452FF; */
    background-color: white;
    border-radius: 12px;
  }
`
const AddTrip = styled.button`
    cursor: pointer;
    font-size: 1.4rem;
    background-color: white;
    border-radius: 8px;
    border: #1babfe solid 1px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    color: #1babfe;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    width: auto;
    padding: 0 2%;

    &:hover{
        opacity: 0.8;
    }
`

// const AddTrip = styled.div`
//     width: 60%;
//     height: 5vh;
//     background-color: red;
//     `
