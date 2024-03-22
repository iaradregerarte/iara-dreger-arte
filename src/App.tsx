import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

export const App = () => {
  return (
    <BrowserRouter basename='/home'>
      <AppRoutes />
    </BrowserRouter>
  );
};
