import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchUser } from './Features/usersSlice';
import UserInput from './Features/UserInput';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUser())
  },[dispatch])

  
  return (
    <Router>
      <div id='container'>
        <NavBar />
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/login"} element={<LoginForm />} />
          <Route path={"/signup"} element={<UserInput />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
