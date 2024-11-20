
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import SecondPage from './components/SecondPage';

// const App = () => {
//   return <>
//   <BrowserRouter>
//   <Routes>
//     <Route path="/login" element={<Login />} />
//     <Route path="/Register" element={<Register />} />
//     <Route path="/" element={<SecondPage />} />
//   </Routes>
//   </BrowserRouter>
//   </>;
// }

// export default App;



// App.js



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<SecondPage />} /> {/* Protect this route */}
        <Route path="/" element={<Register />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
