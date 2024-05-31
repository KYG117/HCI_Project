import { Navigate, createBrowserRouter } from "react-router-dom"
import App from "./App"
import Texts from "./components/Texts"
import NewSetting from "./components/NewSetting"
import Settings from "./components/Settings"

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Texts />,
      },
      {
        path: "/settings/new",
        element: <NewSetting />,
      },
      {
        path: "/settings/:id",
        element: <Settings />,
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/" />
  }
])

export default Router