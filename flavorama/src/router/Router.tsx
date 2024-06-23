import {FC} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from '@/pages/Home';
import Error from "@/pages/Error";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
]);

const Router: FC = () => {
  return (
    <RouterProvider router={router} />
  )
};

export default Router;