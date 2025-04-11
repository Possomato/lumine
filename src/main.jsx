import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

import { AuthProvider } from './hooks/auth.jsx'

import { Routes } from './routes'

createRoot(document.getElementById('root')).render(
  <Analytics>
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </StrictMode>
  </Analytics>
)
