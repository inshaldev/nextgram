import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
