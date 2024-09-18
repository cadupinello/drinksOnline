import { useParams } from 'react-router-dom'
import Header from '../header'
import Hero from '../hero'
import Menu from '../menu'
import * as Styled from './styled'

type PageProps = {
  toggleTheme: () => void
}

const Page = ({toggleTheme}: PageProps) => {
  const { category } = useParams<{category: string}>();
  return (
    <Styled.Container>
      <Hero toggleTheme={toggleTheme} />
      <Header />
      <Menu category={category ?? 'drinks'} />
    </Styled.Container>
  )
}

export default Page