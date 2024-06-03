import {} from "react";
import "./App.css";
import {Box} from "@mui/material"
import Dashboard from './pages/dashboard/dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <Box>
      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
