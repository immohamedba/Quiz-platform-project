import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/NavBar';
import Login from './pages/authentifcations/Login';
import Signup from './pages/authentifcations/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
  
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
