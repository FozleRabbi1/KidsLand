import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './ComponentFile/router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContextProvider from './ComponentFile/AuthProvider/AuthContextProvider'
import { SkeletonTheme } from 'react-loading-skeleton'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SkeletonTheme baseColor='#313131' highlightColor='#525252' > */}
    <SkeletonTheme baseColor='#c7c3c3' highlightColor='#525252' >
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} ></RouterProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </SkeletonTheme>
  </React.StrictMode>,
)
