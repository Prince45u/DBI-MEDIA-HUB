import './index.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Home from './Pages/Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import TermsOfUse from './Pages/TermsOfUse';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar />
      
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/termsofuse" exact element={<TermsOfUse />} />
      
      
      </Routes>

      <Footer />
      </Router>
    </div>
  );
}

export default App;
