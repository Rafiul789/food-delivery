import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./pages/auth/Login";
import Nav from "./components/Nav";
import Register from "./pages/auth/Register";
import Footer from "./components/Footer";
import FoodById from "./pages/Services/FoodById";
import PrivateRoute from "./Auth/PrivateRoute";

function App() {
  return (
    <div style={{ width: "100%" }}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:id"
          element={
          <PrivateRoute>
              <FoodById />
           </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
