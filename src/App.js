import './App.css';
import "./reset.css"
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import Skills from './Components/Skills/Skills';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

function App() {

  const body = document.body

  document.addEventListener('mousemove', (e) => {
    const el = document.createElement('div');
    el.setAttribute('class', 'trail')
    el.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
    el.onanimationend = () => {
      el.remove()
    }
    body.insertAdjacentElement('beforeend', el)
  })




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