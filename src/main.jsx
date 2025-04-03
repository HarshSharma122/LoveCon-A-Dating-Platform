import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Hero from './components/HeroSection/Hero'
import Signup from './components/signup/signup'
import Mainlogic from './components/mainLogic/mainlogic'
import Account from './components/account/Account'
import DatingProfileCreation from './components/datingProfileCreation/DatingProfileCreation'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Hero />

      },

      {
        path: '/signup',
        element: <Signup />
      }
      ,
      {
        path:"/account", 
        element:<Account/>
      }
      ,
      {
        path:"/dateingProfileCrea", 
        element:<DatingProfileCreation/>
      }
    ],
  },
  {
    
    path: '/mainlogic',
    element: <Mainlogic />
  }, 
  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
