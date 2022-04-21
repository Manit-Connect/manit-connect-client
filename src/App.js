import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Welcome from './screens/auth/Welcome';
import Home from './screens/app/Home';
import Societies from './screens/app/Societies';
import CreatePost from './screens/app/CreatePost';
import Academics from './screens/app/Academics';
import Sports from './screens/app/Sports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path='/societies' element={<Societies />} />
        <Route path='/academics' element={<Academics />} />
        <Route path='/sports' element={<Sports />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
