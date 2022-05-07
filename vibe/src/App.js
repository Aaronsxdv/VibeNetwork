import './App.css';
import React from 'react'
import ProfilePage from './components/ProfilePage/ProfilePage'
import { BrowserRouter, Route, Routes, Navigate,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            
            <div>
              <h1>Front Page</h1>
              <Link to='/profile'>Profile</Link>
            </div>
            
          } />
          <Route path="/profile" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
