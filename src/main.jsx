import React from "react"
import ReactDOM from "react-dom"
import ARoutes from "./ARoutes";
import { createRoot } from 'react-dom/client';
import Signup from "./signup";
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById("root"));
root.render(<ARoutes />);