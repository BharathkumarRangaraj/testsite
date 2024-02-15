import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import Contact from "./Contact";
import Home from "./Home.js";

const router =
  createBrowserRouter[
    {
      Path: "/",
      Element: <Home />,
      children: [
        {
          path: "/contact",
          Element: <Contact />,
        },
      ],
    }
  ];

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
