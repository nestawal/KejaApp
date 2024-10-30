import { BrowserRouter as Router, Routes,Route ,Navigate } from 'react-router-dom';
import Signup from "./signUp.jsx"
import App from './App.jsx';
import Cart from "./Cart.jsx"
import Login from "./Login.jsx"


export default function ARoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  );
}


