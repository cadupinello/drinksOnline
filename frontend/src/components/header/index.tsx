import Input from '../parts/input'
import * as Styled from './styled'

const Header = () => {
  const navItem = [
    {
      name: "Drinks",
      link: "/drinks"
    },
    {
      name: "Bebidas",
      link: "/bebidas"
    },
    {
      name: "Cervejas",
      link: "/cervejas"
    },
  ]
  return (
    <Styled.Container>
      <Input />
      <Styled.NavMenu>
        {navItem.map((item, index) => (
          <Styled.NavItem key={index}>
            <Styled.Link href={item.link} active={index === 0}>{item.name}</Styled.Link>
          </Styled.NavItem>
        ))}
      </Styled.NavMenu>
    </Styled.Container>
  )
}

export default Header