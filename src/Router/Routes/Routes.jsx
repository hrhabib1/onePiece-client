import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../assets/Layout/Main";
import Front from "../../assets/Pages/Home/Front";
import Home from "../../assets/Pages/Home/Home";
import SignIn from "../../assets/Pages/SignIn/SignIn";
import SignUp from "../../assets/Pages/SignIn/SignUp";
import Meet from "../../assets/Pages/Services/Meet/Meet";
import Fishes from "../../assets/Pages/Services/Fishes/Fishes";
  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
          {
              path: '/',
              element: <Front></Front>
          },        
          {
              path: '/home',
              element: <Home></Home>
          },
          {
              path: '/signIn',
              element: <SignIn></SignIn>
          },
          {
              path: '/signUp',
              element: <SignUp></SignUp>
          },
          {
              path: '/meat',
              element: <Meet></Meet>
          },
          {
            path: '/fishes',
            element: <Fishes></Fishes>
        },
      
        
        ]
    },
  ]);