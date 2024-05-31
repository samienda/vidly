import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";

import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <main className="container">
        <Routes>
          <Route path="/movies/:id" Component={MovieForm}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="/" element={<Navigate to="/movies" />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
