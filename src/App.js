import './App.css';
// import ReactDOM from "react-dom";
import Login from './Components/Login/Login';
import {

  Route,
  Routes,
} from "react-router-dom";
import NewSign from './Components/Signup/NewSign';
import Creact from './Components/Creact/Creact';
import Dashboard from './Components/Dashboard/Dashboard';
import Show from './Components/Show/Show';
import Header from './Components/Dashboard/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<NewSign />} />
        <Route path="/creact" element={<Creact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div >
  );
}

export default App;
