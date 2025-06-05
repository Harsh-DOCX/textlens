import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './style.css'
import Navbar from "./components/Navbar";
import Synonyms from './components/Synonyms';
import Antonyms from './components/Antonyms';
import Dictionary from './components/Dictionary';
import Home from './components/Home';
import Analyze from './components/Analyze';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar title="TEXTLENS" />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analyse-text' element={<Analyze />} />
          <Route path='/synonyms' element={<Synonyms />} />
          <Route path='/antonyms' element={<Antonyms />} />
          <Route path='/translator' element={<Dictionary />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
