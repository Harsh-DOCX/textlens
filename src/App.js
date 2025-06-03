import './style.css'
import Navbar from "./components/Navbar";
import Synonyms from './components/Synonyms';
// import Home from './components/Home';
// import Analyze from './components/Analyze';

function App() {
  return (
    <>
      <Navbar title = "TEXTLENS"/>
      {/* <Home /> */}
      {/* <Analyze /> */}
      <Synonyms />
    </>
  );
}

export default App;
