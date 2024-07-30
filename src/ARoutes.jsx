import { BrowserRouter as Router, Routes,Route ,Navigate } from 'react-router-dom';
import Signup from "./signUp.jsx"
import App from './App.jsx';

export default function ARoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/Sign' index element={<Signup />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </Router>
  );
}


