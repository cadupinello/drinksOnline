import Footer from '../footer'
import Header from '../header'
import Hero from '../hero'
import Menu from '../menu'
import * as Styled from './styled'

const Page = () => {
  return (
    <Styled.Container>
      <Hero />
      <Header />
      <Menu />
      <Footer />
    </Styled.Container>
  )
}

export default Page