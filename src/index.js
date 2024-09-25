import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Download from './pages/downloads';
import Settings from './pages/settings';
import Profile from './pages/profile';
import Documents from './pages/documents';
import Login from './pages/login';
import Register from './pages/register';
import UserCard from './components/UserCard';
import Users from './pages/user';
import Post from './pages/post';
import AddPost from './pages/add_post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home/>}/>
          <Route path='downloads' element={<Download/>}/>
          <Route path='settings' element={<Settings/>}/>
          <Route path='documents' element={<Documents/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='user' element={<Users/>}/>
          <Route path='posts' element={<Post/>}/>
          <Route path='posts/add' element={<AddPost/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
