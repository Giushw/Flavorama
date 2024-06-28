import {FC} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '@/pages/Home';
import Error from "@/pages/Error";
import Search from '@/pages/Search';
import Detail from '@/pages/Detail';

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
  {
    path: '/recipe/:id',
    element: <Detail />,
  },
]);

const Router: FC = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Router;