import Header from '../header'
import Hero from '../hero'
import Menu from '../menu'
import * as Styled from './styled'

type PageProps = {
  toggleTheme: () => void
}

const Page = ({toggleTheme}: PageProps) => {
  return (
    <Styled.Container>
      <Hero toggleTheme={toggleTheme} />
      <Header />
      <Menu />
    </Styled.Container>
  )
}

export default Page