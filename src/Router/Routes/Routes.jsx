import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../assets/Layout/Main";
import Front from "../../assets/Pages/Home/Front";
import Home from "../../assets/Pages/Home/Home";
import SignIn from "../../assets/Pages/SignIn/SignIn";
import SignUp from "../../assets/Pages/SignIn/SignUp";
import AddPost from "../../assets/Pages/AddPost/AddPost";
import Meet from "../../assets/Pages/Services/Meet";
import Fishes from "../../assets/Pages/Services/Fishes";
import Vegetable from "../../assets/Pages/Services/Vegetable";
import Rice from "../../assets/Pages/Services/Rice";
import Order from "../../assets/Pages/Order/Order";
import MyOrder from "../../assets/Pages/Order/MyOrder";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AllOrders from "../../assets/Pages/Order/AllOrders";
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
              element: <PrivateRoute><Meet></Meet></PrivateRoute> 
          },
          {
            path: '/fishes',
            element: <PrivateRoute><Fishes></Fishes></PrivateRoute> 
        },
          {
            path: '/addPost',
            element: <AddPost></AddPost>
        },
        {
          path: '/vegetables',
          element: <PrivateRoute><Vegetable></Vegetable></PrivateRoute> 
      },
      {
        path: '/rice',
        element: <PrivateRoute><Rice></Rice></PrivateRoute> 
    },
      {
        path: '/myOrder',
        element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
    },
      {
        path: '/allOrders',
        element: <PrivateRoute><AllOrders></AllOrders></PrivateRoute>
    },
      {
        path: '/order/:id',
        element: <Order></Order>,
        loader: ({params}) => fetch(`http://localhost:5000/addSellPost/${params.id}`)
    },
      
        
        ]
    },
  ]);