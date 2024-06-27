import './App.css';
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
    </>
  );
}

export default App;
