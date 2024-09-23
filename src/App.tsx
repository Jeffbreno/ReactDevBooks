import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { SignIn } from './pages/Auth/Signin'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
