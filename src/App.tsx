import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BannerIcon from './assets/banner-un-draw.svg';
import './index.css';

function App() {
  return (
    <BrowserRouter basename='/cadastro-fazenda'>
      <Routes>
        <Route
          path='/'
          element={
            <section className='w-full h-full flex flex-col items-center justify-center px-4 gap-12'>
              <img src={BannerIcon} alt='Banner' className='w-1/2 max-w-[448px]' />
              <img src={BannerIcon} alt='Banner' className='w-1/2 max-w-[448px]' />
            </section>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
