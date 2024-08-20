import Search from '../../../assets/icons/search'
import * as Styled from './styled'
const Input = () => {
  return (
    <Styled.Container>
      <Search />
      <Styled.Input type="text" placeholder='Buscar produto' />
    </Styled.Container>
  )
}

export default Input