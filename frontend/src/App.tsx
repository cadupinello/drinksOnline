import { DefaultTheme, ThemeProvider } from "styled-components"
import Page from "./components/page/page"
import usePersistTheme from "./hooks/usePersistTheme"
import * as Styled from "./styled"
import GlobalStyle from "./styles/global"
import dark from "./styles/themes/dark"
import light from "./styles/themes/light"

function App() {
  const [theme, setTheme] = usePersistTheme<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.Layout>
        <Page />
      </Styled.Layout>
    </ThemeProvider>
  )
}

export default App
