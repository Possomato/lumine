import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/global'

import theme from './styles/theme'

import { Details } from './pages/Details'
import { Feed } from './pages/Feed'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { New } from './pages/New'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <New />
    </ThemeProvider>
  </StrictMode>
)
