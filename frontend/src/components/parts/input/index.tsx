import Search from '../../../assets/icons/search'
import * as Styled from './styled'

const Input = () => {
  return (
    <Styled.Container>
      <Styled.Input type="text" placeholder='Buscar produto'/>
      <Search />
    </Styled.Container>
  )
}

export default Input