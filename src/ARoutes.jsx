import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from "./signup.jsx"
import App from './App.jsx';

export default function ARoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Signup />} />
        <Route path="/main" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}


