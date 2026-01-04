import { createBrowserRouter } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import { RouterProvider } from "react-router/dom";
import TeachersPage from "../../pages/TeachersPage/TeachersPage";
import FavoritesPage from "../../pages/Favorites/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "../../features/auth/AuthProvider";

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
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default App;
