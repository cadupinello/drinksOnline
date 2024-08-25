import { useDrinks } from '../../hooks/useDrinks';
import * as Styled from './styled';

const Menu = () => {
  const { data: drinks, error, isLoading } = useDrinks();
  
  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <Styled.Container>
      <Styled.Title>Drinks</Styled.Title>
      <Styled.List>
        {drinks.map((item: any) => (
          <Styled.Item key={item.id}>
            <div>
              <h1>{item.name}</h1>
              <span>{item.description}</span>
              <p>A partir de: R$ 10,00</p>
            </div>
            <img src={item.image ? item.image : 'https://via.placeholder.com/150'} alt={item.name} />
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default Menu