import { BrowserRouter as Router, Routes,Route ,Navigate } from 'react-router-dom';
import Signup from "./signUp.jsx"
import App from './App.jsx';
import Cart from "./Cart.jsx"
import Login from "./Login.jsx"


export default function ARoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<App />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </Router>
  );
}


