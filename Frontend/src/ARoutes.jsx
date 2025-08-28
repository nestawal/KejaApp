import {lazy, Suspense} from 'react'
import { BrowserRouter as Router, Routes,Route ,Navigate } from 'react-router-dom';
import Signup from "./signUp.jsx"
import App from './App.jsx';
import Cart from "./Cart.jsx"
import Login from "./Login.jsx"
import MyPosts from './MyPosts.jsx';
import AddPost from './AddPost.jsx';
import PostInfo from './postInfo.jsx';
import admin from './admin.jsx';


export default function ARoutes() {
  return (
    <Router>
      <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route path='/'  element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/posts" element={<MyPosts />}/>
        <Route path="/posts/:id" element={<PostInfo />}/>
        <Route path="/addPost" element={<AddPost />}/>
        <Route path="/admin" element={<admin />}/>
      </Routes>
      </Suspense>
    </Router>
  );
}


