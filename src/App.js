import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import DashboardLayout from './layouts/DashboardLayout';
import Profile from './pages/profile/profile';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />

        <Route element={<DashboardLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
