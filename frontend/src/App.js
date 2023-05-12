import {BrowserRouter, Routes, Route} from 'react-router-dom'

// pages & components
import AnnotationPage from './pages/AnnotationPage.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path="/"
              element={AnnotationPage}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
