
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/footer/Footer'



function App() {
  return (
    <div>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  );
}

export default App;
