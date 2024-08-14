import React from 'react';


import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import store from './redux/store'; // Ensure this path is correct
import App from './App';
import ContactPage from './ContactPage'; // Ensure this path is correct
import CartPage from './CartPage'; // Ensure this path is correct
import Login from './Login'
import Register from './Register'
import About from './components/About'
import BookAService from './BookAService';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/ContactPage',
    Component: ContactPage,

    
  },
  {
    path: '/CartPage',
    Component: CartPage,
  },
  {
    path: '/Login',
    Component:Login,
  },
  {
    path:'/Register',
    Component:Register
  },
  {
    path:'/About',
    Component:About
  },
  {
    path:'/BookAService',
    Component:BookAService
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


