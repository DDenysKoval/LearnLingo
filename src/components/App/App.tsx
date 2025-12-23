import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import { RouterProvider } from "react-router/dom";
import TeachersPage from "../../pages/TeachersPage/TeachersPage";
import FavoritesPage from "../../pages/Favorites/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/teachers",
    element: <TeachersPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
