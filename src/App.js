import './App.css';
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
    </>
  );
}

export default App;
