import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/profile",
    element: <Profile/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
])

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}