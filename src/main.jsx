import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Contact from './Components/Contact/Contact.jsx';
import About from './Components/About/About.jsx';
import Users from './Components/Users/Users.jsx';
import UserInfo from './Components/UserInfo/UserInfo.jsx';
import Post from './Components/Posts/Posts.jsx';
import Posts from './Components/Posts/Posts.jsx';
import PostDetails from './Components/PostDetails/PostDetails.jsx';
import Photos from './Components/Gallery/Photos.jsx';
import PhotoDetails from './Components/Gallery/PhotoDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Meals from './Components/Meals/Meals.jsx';
import MealDetails from './Components/Meals/MealDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserInfo></UserInfo>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      },
      {
        path: '/photos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos></Photos>
      },
      {
        path: '/photo/:photoId',
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/photos/${params.photoId}`),
        element: <PhotoDetails></PhotoDetails>
      }, {
        path: '/meals',
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
        element: <Meals></Meals>
      },
      {
        path: '/meal/:idMeal',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
        element: <MealDetails></MealDetails>,
      },
    ]
  }

]);
RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
