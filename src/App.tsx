import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import { LandingPageLayout } from './Layout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
])

const App = () => <RouterProvider router={router} />

export default App
