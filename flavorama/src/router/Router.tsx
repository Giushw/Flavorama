import {FC} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '@/pages/Home';
import Error from "@/pages/Error";
import Search from '@/pages/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

const Router: FC = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Router;