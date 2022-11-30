import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/*" element={<Navigate to="/"/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;