import './App.css';
import "./reset.css"
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import Horizontals from './Components/Horizontals/Horizontals';

function App() {

/*   const body = document.body

  document.addEventListener('mousemove', (e) => {
    const el = document.createElement('div');
    el.setAttribute('class', 'trail')
    el.setAttribute('style', `left: ${e.clientX}px; top: ${e.clientY}px`);
    el.onanimationend = () => {
      el.remove()
    }
    body.insertAdjacentElement('beforeend', el)
  }) */


  return (
    <div className='App'>
      <NavBar />
      <MainPage />
      <Horizontals/>
    </div>

  );
}

export default App;