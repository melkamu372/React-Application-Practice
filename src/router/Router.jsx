import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App.jsx';
import Profile from '../components/Todo.jsx';
import ErrorPage from '../NotFound/notFound.jsx';

const baseUrl = '/React-Application-Practice';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: baseUrl,
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: `${baseUrl}/profile`,
      element: <Profile />,
      errorElement: <ErrorPage />,
    },
    {
        path: `${baseUrl}/profile/:name`,
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
  ]);

  return <div><RouterProvider router={router} /></div>;
};

export default Router;