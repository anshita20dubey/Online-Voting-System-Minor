import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Results from "./components/Results";
import Voting from "./components/Voting";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";


const App = () => {
  return (
  <AuthProvider>
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/results" element={<Results />} />
        <Route path="/voting" element={<Voting />} />
      </Routes>
    </Router>

  </AuthProvider>
  );
};  

export default App;
