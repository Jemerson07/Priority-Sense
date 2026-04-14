import { RouterProvider } from 'react-router-dom';
import { appRouter } from './app/router/AppRouter';

export default function App() {
  return <RouterProvider router={appRouter} />;
}
