import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import Skill from './Components/Skill/Skill';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Skill/>
      <Project />
      <Experience/>
      <Contact/>
    </>
  );
}

export default App;
