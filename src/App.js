import './App.css';
import
{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import LoginPage from './layouts/LoginPage';
import RegisterPage from './layouts/RegisterPage';
import ErrorPage from './layouts/ErrorPage';
import { AnimatePresence } from "framer-motion"

function App ()
{
  const router = createBrowserRouter( [
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/register",
      element: <RegisterPage />,
      errorElement: <ErrorPage />
    }
  ] );


  return (
    <AnimatePresence>
      <RouterProvider router={ router } />
    </AnimatePresence>
  );
}

export default App;
