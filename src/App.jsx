
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import Contact from './components/Contact';
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Header/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "about", element: <Contact /> },
      ],
    },
  ]);
 
  return (
    <div>
     <RouterProvider router={appRouter} />
     </div>
  )
}

export default App
