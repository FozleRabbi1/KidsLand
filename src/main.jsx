import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ComponentFile/router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from './ComponentFile/AuthProvider/AuthContextProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} ></RouterProvider>
      </QueryClientProvider>
    </AuthContextProvider>

  </React.StrictMode>,
)
