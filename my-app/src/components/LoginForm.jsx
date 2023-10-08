import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  Button,
  Avatar,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { LockOutlined as LockOutlinedIcon } from "@mui/icons-material";
import AddTripForm from "./AddTripForm";
import logo from "../assets/logo.png";
import googleIcon from "../assets/googleicon.png";
import fbIcon from "../assets/fbicon.png";
import ArcGlobe from "./ArcGlobe";

export default function Login() {
  return (

    <Containers>
      <LoginBody />
      <TripImage src="https://img.freepik.com/free-vector/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.jpg?1&w=740&t=st=1693740207~exp=1693740807~hmac=a4e21dc73e5f18a5ea2b48767c92b2bf56ac266a7e755cdc8314d520eca9ef98" />
    </Containers>

  );
}

const Containers = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: white;
  position: absolute;
  top: 15vh;
  left: 10vw;
  display: flex;
  border-radius: 15px;
`;

const TripImage = styled.img`
  width: 50%;
  height:80%;
  border-radius: 0 15px 15px 0;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const SignupBody = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
    <div style={{height:'200px'}}>
      <LoginBodyContainer>
        <Logo src={logo} />
        <LoginHeading>Create Account</LoginHeading>
        <GoogleFbBtns>
          <Button variant="outlined">
            {" "}
            <GoogleIcon src={googleIcon} /> Google
          </Button>
          <Button variant="outlined">
            {" "}
            <FbIcon src={fbIcon} /> Facebook
          </Button>
        </GoogleFbBtns>
        <Span>
          <hr /> or create with email <hr />
        </Span>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Your Name"
                name="name"
                autoComplete="text"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                href="/addtrip"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/login" variant="body2">
                    {"Already have a account? Login"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </LoginBodyContainer>
      </div>
    </>
  );
};

const LoginBodyContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5% 8%;
`;

const Logo = styled.img`
  width: 35%;
  margin: 0;
`;

const LoginHeading = styled.h1`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  margin: 2% 0 0.5% 0;
`;

const GoogleFbBtns = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 7%;
  margin: 5% 0;
`;

const GoogleIcon = styled.img`
  width: 12%;
`;

const FbIcon = styled.img`
  width: 12%;
  margin-inline: 5%;
`;

const Span = styled.span`
  display: flex;
  width: 100%;
  font-size: 0.75rem;
  justify-content: center;
  align-items: center;
  color: grey;
  margin: 0;
`;

const LoginBody = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <SignupBodyContainer>
        <Logo src={logo} />
        <LoginHeading>Log in to your Account</LoginHeading>
        <LoginSubHeading>Welcome back! Select method to login:</LoginSubHeading>
        <GoogleFbBtns>
          <Button variant="outlined">
            {" "}
            <GoogleIcon src={googleIcon} /> Google
          </Button>
          <Button variant="outlined">
            {" "}
            <FbIcon src={fbIcon} /> Facebook
          </Button>
        </GoogleFbBtns>
        <Span>
          <hr /> or login with email <hr />
        </Span>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </SignupBodyContainer>
    </>
  );
};

const SignupBodyContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 7% 8%;
`;

const LoginSubHeading = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 50;
  font-size: 0.8rem;
  margin: 0;
  color: grey;
`;