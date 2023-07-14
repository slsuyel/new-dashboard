import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNavbar from "./layouts/WithNavbar";
import WithOutnavbar from "./layouts/WithOutnavbar";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";
import Blogs from "./pages/blogs";
import Booking from "./hotels/Booking/Booking";
import AllHotels from "./hotels/AllHotels/AllHotels";
import HotelDetails from "./hotels/AllHotels/HotelDetails";
import Employees from "./hotels/Employees/Employees";
import Transaction from "./hotels/Transaction/Transaction";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutnavbar />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

        </Route>
        <Route element={<WithNavbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/hotels" element={<AllHotels />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/users" element={<Users />} />
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
