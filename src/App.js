import logo from './logo.svg';
import './assets/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
    
    <div className="App">
      <header className="App-header">
        
          This is main page
      
      </header>
    </div>
    </Router>
  );
}

export default App;
