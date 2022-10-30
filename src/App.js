import './App.css';
import "./reset.css"
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Skills />
      <Portfolio />
      <Contact/>
    </>

  );
}

export default App;