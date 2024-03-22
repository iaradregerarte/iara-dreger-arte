import { About } from '../pages/about';
import { Home } from '../pages/home/home';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        {/* <Route path="*" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};
