import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddFarm } from './pages';

function App() {
  return (
    <BrowserRouter basename='/cadastro-fazenda'>
      <Routes>
        <Route path='/' element={<AddFarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
