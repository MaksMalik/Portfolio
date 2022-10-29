import './App.css';
import "./reset.css"
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Skills/>
    </>

  );
}

export default App;