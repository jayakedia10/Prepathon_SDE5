import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Paper from "@mui/material/Paper";
import { green, red } from "@mui/material/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import OpenIcon from "@mui/icons-material/CheckCircleOutline"; // Icon for open status
import ClosedIcon from "@mui/icons-material/Block"; // Icon for closed status

let mumbai =
  // "https://i.pinimg.com/564x/67/30/7b/67307b4ebe3a3fa46a6b3bf61fef168f.jpg";
  "https://img.freepik.com/free-vector/city-scene-with-ferris-wheel-buildings_1308-33159.jpg?size=626&ext=jpg";
let delhi =
  // "https://i.pinimg.com/564x/a1/ab/01/a1ab01259e15393f9f71c6848ae6c2e9.jpg";
  "https://img.freepik.com/free-vector/scene-beautiful-cityscape-with-hight-building-shop-street-with-park_1150-48972.jpg?size=626&ext=jpg";
let bangalore =
  // "https://i.pinimg.com/736x/c9/f9/2d/c9f92d089a1b3795cadb47f0396a1515.jpg";
  "https://img.freepik.com/free-vector/background-with-night-city-neon-lights_1441-2588.jpg?size=626&ext=jpg&ga=GA1.1.104460898.1696775877&semt=ais";
let goa =
  // "https://i.pinimg.com/564x/09/d0/96/09d0963bc578753195fad81f4c25d5f6.jpg";
  "https://img.freepik.com/free-vector/city-scene-with-ferris-wheel-buildings_1308-33159.jpg?size=626&ext=jpg";

let hill =
  // "https://i.pinimg.com/564x/02/4c/d8/024cd8c84878e91a00c1acffc3ff7ce2.jpg";
  "https://img.freepik.com/free-vector/scene-beautiful-cityscape-with-hight-building-shop-street-with-park_1150-48972.jpg?size=626&ext=jpg";


export default function Homepage() {
  return (
    <HomepageContainer>
      <Container1>
        <Communities>
          <h1 style={{color: 'rgb(67, 67, 136)'}}>Popular Communities</h1>
          <div
            style={{
              padding: "1%",
              flexDirection: "column",
              overflowY: "scroll",
              backgroundColor: "#f0f0f0",
            }}
          >
            {/* <TextField id="outlined-basic" label="Search Communities" variant="outlined" style={{width: '100%'}}/> */}
            <TextField
              id="outlined-basic"
              label="Search Communities"
              variant="outlined"
              style={{ width: "100%", backgroundColor: 'white' }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <CommunityCard commname="Adventure Seekers Club" text="Open" color="green" communityName="51 Members"/>
            <CommunityCard commname="Trekking Titans" text="Open" color="green" communityName="12 Members"/>
            <CommunityCard commname="Nature Enthusiasts Society" text="Open" color="green" communityName="25 Members"/>
          </div>
        </Communities>
        <LiveTrips>
          <h1 style={{color: 'rgb(67, 67, 136)'}}>Live Trips</h1>
          <div
            style={{
              width: "100%",
              height: "100%",
              boxSizing: "border-box",
              overflowY: "scroll",
              padding: "1%",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "2%",
                backgroundColor: "white",
              }}
            >
              <TripCard
                fromCity="Varanasi"
                toCity="Mumbai"
                communityName="Off-Road Explorers"
                text="Open"
                color="green"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "2%",
                backgroundColor: "white",
              }}
            >
              <TripCard
                fromCity="Hyderabad"
                toCity="Kolkata"
                communityName="Urban Explorers Alliance"
                text="Full"
                color="red"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "auto",
                marginBottom: "2%",
                backgroundColor: "white",
              }}
            >
              <TripCard
                fromCity="Indore"
                toCity="Chennai"
                communityName="Coastal Adventurers"
                text="Open"
                color="green"
              />
            </div>
          </div>
        </LiveTrips>
      </Container1>
      <Searchtrips>
        <SearchTrip />
      </Searchtrips>
      <Recommends>
        <h1 style={{color: 'rgb(67, 67, 136)'}}>Handpicked Collections for You</h1>
        <div
          style={{
            display: "flex",
            display: "flex",
            overflowX: "auto",
            gap: "1%",
          }}
        >
          <RecommendsCards
            subheading="Stays in & Around Delhi for a Weekend Gateway"
            destination={delhi}
            top="TOP 8"
          />
          <RecommendsCards
            subheading="Stays in & Around Mumbai for a Weekend Gateway"
            destination={mumbai}
            top="TOP 7"
          />
          <RecommendsCards
            subheading="Stays in & Around Bangalore for a Weekend Gateway"
            destination={bangalore}
            top="TOP 8"
          />
          <RecommendsCards
            subheading="Vacation Around Beaches"
            destination={goa}
            top="TOP 9"
          />
          <RecommendsCards
            subheading="Attain Peace of Mind in Hill Stations"
            destination={hill}
            top="TOP 11"
          />
        </div>
      </Recommends>
    </HomepageContainer>
  );
}

const HomepageContainer = styled.div`
  box-sizing: border-box;
  width: 100vw;
  padding: 0 5%;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #383838;
  /* background-color: #f0f0f0; */
  background-color: rgb(67, 67, 136, 0.7);
  /* opacity: 0.6; */
  font-family: "Roboto", sans-serif;
`;

const Container1 = styled.div`
  display: flex;
  width: 100%;
  height: 48vh;
  justify-content: space-between;
  border-radius: 12px;
  margin-top: 3%;
`;

const Communities = styled.div`
  width: 49%;
  height: 50vh;
  background-color: #fff;
  box-sizing: border-box;
  padding: 2% 4%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 2%;
  flex-direction: column;
  border-radius: 12px;
`;

const LiveTrips = styled.div`
  width: 49%;
  height: 50vh;
  background-color: #fff;
  box-sizing: border-box;
  padding: 2% 4%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 2%;
  flex-direction: column;
  border-radius: 12px;
`;

const Searchtrips = styled.div`
    width: 100%;
    background-color: #fff;
    margin: 2% 2% 5% 2%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box
    padding: 10%;`;

const Recommends = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  box-sizing: border-box;
  padding: 2%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 2%;
  flex-direction: column;
  border-radius: 12px;
`;

function SearchTrip() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "2% 5% 0 5%",
        boxSizing: "border-box",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        fontFamily: '"Roboto", sans-serif',
        borderRadius: "12px",
      }}
    >
      <h1  style={{color: 'rgb(67, 67, 136)'}}>Plan a Trip</h1>
      <FormControl>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            value="One Way"
            control={<Radio />}
            label="One Way"
          />
          <FormControlLabel
            value="Round Trip"
            control={<Radio />}
            label="Round Trip"
          />
          <FormControlLabel
            value="Multi City"
            control={<Radio />}
            label="Multi City"
          />
        </RadioGroup>
      </FormControl>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          margin: "2% 0",
        }}
      >
        <FormControl style={{ width: "22%" }}>
          <InputLabel id="demo-simple-select-label">Departing City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Departing City"
            /* onChange={handleChange} */
          >
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Mumbai</MenuItem>
            <MenuItem value={30}>Bangalore</MenuItem>
            <MenuItem value={40}>Goa</MenuItem>
            <MenuItem value={50}>Shimla</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "21%" }}>
          <InputLabel id="demo-simple-select-label">
            Destination City
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Departing City"
            /* onChange={handleChange} */
          >
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Mumbai</MenuItem>
            <MenuItem value={30}>Bangalore</MenuItem>
            <MenuItem value={40}>Goa</MenuItem>
            <MenuItem value={50}>Shimla</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "17%" }}>
          <InputLabel id="demo-simple-select-label">Departure</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Departure"
          >
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Mumbai</MenuItem>
            <MenuItem value={30}>Bangalore</MenuItem>
            <MenuItem value={40}>Goa</MenuItem>
            <MenuItem value={50}>Shimla</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "17%" }}>
          <InputLabel id="demo-simple-select-label">Return</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Return"
            /* onChange={handleChange} */
          >
            <MenuItem value={10}>Delhi</MenuItem>
            <MenuItem value={20}>Mumbai</MenuItem>
            <MenuItem value={30}>Bangalore</MenuItem>
            <MenuItem value={40}>Goa</MenuItem>
            <MenuItem value={50}>Shimla</MenuItem>
          </Select>
        </FormControl>
        <FormControl style={{ width: "17%" }}>
          <InputLabel id="demo-simple-select-label">Travellers</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Travellers"
            /* onChange={handleChange} */
          >
            <MenuItem value={10}>One</MenuItem>
            <MenuItem value={20}>Two</MenuItem>
            <MenuItem value={30}>Small Family</MenuItem>
            <MenuItem value={40}>Large Group</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button
        variant="contained"
        style={{
          position: "relative",
          width: "22%",
          height: "8vh",
          left: "39%",
          bottom: "-4vh",
          fontSize: "1.5rem",
          borderRadius: "30px",
          backgroundColor: 'rgb(67, 67, 136)'
        }}
      >
        SEARCH TRIP
      </Button>
    </div>
  );
}

function RecommendsCards(props) {
  return (
    <Card sx={{ minWidth: 222, maxHeight: 250 }} style={{ flex: "0 0 auto" }}>
      <CardActionArea
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0,7), rgba(0, 0, 0, 0.7))",
        }}
      >
        <CardMedia
          component="img"
          height="250"
          image={props.destination}
          alt="hello"
        />
        <div
          style={{
            position: "absolute",
            top: "25%",
            display: "flex",
            flexDirection: "column",
            padding: "3%",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              width: "5vw",
              borderRadius: "12px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h3 style={{}}>{props.top}</h3>
          </div>
          <h4
            style={{
              fontSize: "1.5rem",
              // color: 'rgb(67, 67, 136)',
              
              color: "darkblue",
              zIndex: "150",
              fontWeight: "800",
              backdropFilter: "blur(8px)",
            }}
          >
            {props.subheading}
          </h4>
        </div>
      </CardActionArea>
    </Card>
  );
}

function TripCard(props) {
  const isOpen = true;

  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center">
          {/* Left Part */}
          <Box flex={1}>
            <Typography variant="h6">
              {props.fromCity} <span>&rarr;</span> {props.toCity}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {props.communityName}
            </Typography>
          </Box>
          {/* Right Part */}
          <Box>
            {/* You can conditionally render a green or red status */}
            {/* For example, if the trip is open, use green; if it's full, use red */}
            <Typography variant="body2" style={{ color: `${props.color}` }}>
              {props.text}
            </Typography>
            {/* If it's full, use red */}
            {/* <Typography variant="body2" style={{ color: "red" }}>
                Full
              </Typography> */}
          </Box>
        </Box>
      </CardContent>
      <Divider />
      {/* Additional content for the card can be added here */}
    </Card>
  );
}

function CommunityCard(props) {
  // const isOpen = true;

  return (
    <Card style={{margin: '2% 0'}}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {/* Left Part */}
          <Box flex={1}>
            <Typography variant="h6">{props.commname}</Typography>
            <Typography variant="body2" color="textSecondary">
              {props.communityName}
            </Typography>
          </Box>
          {/* Right Part */}
          <Box>
            {/* You can conditionally render a green or red status */}
            {/* For example, if the trip is open, use green; if it's full, use red */}
            <Typography variant="body2" style={{ color: `${props.color}` }}>
              {props.text}
            </Typography>
            {/* If it's full, use red */}
            {/* <Typography variant="body2" style={{ color: "red" }}>
                Full
              </Typography> */}
          </Box>
        </Box>
      </CardContent>
      <Divider />
      {/* Additional content for the card can be added here */}
    </Card>
  );
}
