import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import AddTripForm from './components/AddTripForm.jsx'
import TripDashboard from './components/TripDashboard.jsx'
import CommunityDashboard from "./components/CommunityDashboard.jsx";
import Registration from "./components/RegisterForm.jsx";
import Login from "./components/LoginForm.jsx";
import Layout from "./components/Layout.js";
import UserProfilePage from "./components/UserDashboard.jsx";
import Homepage from "./components/Home.jsx";
const App = () => {
  let routes = useRoutes([
    { path: "/addtrip", element: <AddTripForm /> },
    { path: "/trip/1", element: <TripDashboard /> },
    { path: "/community/1", element: <CommunityDashboard /> },
    { path: "/profile/1", element: <UserProfilePage /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Registration /> },
    { path: "/home", element: <Homepage /> },

  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Layout>
    <Router>
      <App />
    </Router>
    </Layout>
  );
};

export default AppWrapper;