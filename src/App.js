import React from 'react';
import Home from './pages/Home';
import './styles/globals.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (     <div>  <BrowserRouter>
    <Routes>
        <Route
            exact
            path="/"
            element={<Home />}
        />
        <Route
            exact
            path="/about"
            element={()=>{}}
        />
    </Routes>
</BrowserRouter>
</div>
)
}

export default App;
