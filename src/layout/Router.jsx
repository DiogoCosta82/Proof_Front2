import Login from "../pages/Login";
import Home from "../pages/home";
import TableauBord from "../pages/TableauBord";
import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Disconnect from "../pages/Disconnect";
import EditProfil from "../pages/Edit";
import ResetPWD from "../pages/ResetPWD";
import ForgetPWD from "../pages/ForgetPWD";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/disconnect",
    element: <Disconnect />,
  },
  {
    path: "/tableau-bord",
    element: <TableauBord />,
  },
  {
    path: "/editprofile",
    element: <EditProfil />,
  },
  {
    path: "/forget-password",
    element: <ForgetPWD />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPWD />,
  },
  {
    path: "/reset-password/",
    element: <ResetPWD />,
  },
]);

export default router;
