import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Register/>
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
