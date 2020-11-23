import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home className="Home"/>
        <Footer />
    </div>
  );
}

export default App;
