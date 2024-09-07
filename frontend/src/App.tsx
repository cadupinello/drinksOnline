import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { DefaultTheme, ThemeProvider } from "styled-components"
import Page from "./components/page/page"
import usePersistTheme from "./hooks/usePersistTheme"
import * as Styled from "./styled"
import GlobalStyle from "./styles/global"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

function App() {
  const [theme, setTheme] = usePersistTheme<DefaultTheme>('theme', light)
  const queryClient = new QueryClient()

  const toggleTheme = () => {
    console.log(theme)
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
        <Styled.Layout>
            <Routes>
              <Route path="/:category" element={<Page toggleTheme={toggleTheme} />} />
              <Route path="/" element={<Page toggleTheme={toggleTheme} />} />
            </Routes>
          </Styled.Layout>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
