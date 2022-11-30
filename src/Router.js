import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
      <App />
    </>

  );
}

export default Router;