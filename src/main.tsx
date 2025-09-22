import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import QuestionDetail from './pages/QuestionDetail'
import AskQuestion from './pages/AskQuestion'
import NotFound from './pages/NotFound'
// FIXED: Import WalletProvider
import { WalletProvider } from './contexts/WalletContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "question/:id",
        element: <QuestionDetail />,
      },
      {
        path: "ask",
        element: <AskQuestion />,
      },
    ],
  },
])

// FIXED: Wrap the entire app with WalletProvider
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletProvider>
      <RouterProvider router={router} />
    </WalletProvider>
  </StrictMode>,
)