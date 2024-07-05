import React from 'react';
import { createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './styling/App.css'
import LandingPage from './views/LandingPage.jsx'
import UniversityCourses from './views/UniversityCourses.jsx'

function App() {

  const handleUniversityPageProps = async(event)=>{
    
  }
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/university-page/:id",
      element: <UniversityCourses universityName={'University of Waterloo'} departments={'ECE'}/>
    },

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App