import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { AddFarm } from './pages';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='*' element={<AddFarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
