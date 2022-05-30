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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<NewSign />} />
        <Route path="/creact" element={<Creact />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div >
  );
}

export default App;
