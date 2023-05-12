import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'

// pages & components  
import AnnotationPage from './pages/AnnotationPage';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route
              path="/"
              element={<AnnotationPage/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
