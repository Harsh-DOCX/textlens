import './style.css'
import Navbar from "./components/Navbar";
// import Synonyms from './components/Synonyms';
// import Antonyms from './components/Antonyms';
import Dictionary from './components/Dictionary';
// import Home from './components/Home';
// import Analyze from './components/Analyze';

function App() {
  return (
    <>
      <Navbar title = "TEXTLENS"/>
      {/* <Home /> */}
      {/* <Analyze /> */}
      {/* <Synonyms /> */}
      {/* <Antonyms /> */}
      <Dictionary />
    </>
  );
}

export default App;
