import { Navigate } from "react-router"
import Layout from "../components/Layout/Layout"
import { MainPage, NumberFacts } from "../pages"

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path:'/facts',
        element: <NumberFacts />
      }
    ]
  },
  {
    path:'/*',
    element:<Navigate to='/' />
  }
]