import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Application from './stacks/Application';
import Auth from './stacks/Auth';
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Welcome from './screens/auth/Welcome';
import Home from './screens/app/Home';
import Societies from './screens/app/Societies';
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path='/societies' element={<Societies />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
