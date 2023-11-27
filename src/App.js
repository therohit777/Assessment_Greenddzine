import './App.css';
import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Login from './components/Js/Login';
import Home from './components/Js/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
