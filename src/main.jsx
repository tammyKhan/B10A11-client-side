import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/router.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
     {/* <Toaster position='top-right' reverseOrder={false} /> */}
     </AuthProvider>
  </StrictMode>,
)
