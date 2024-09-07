import { useDrinks } from '../../hooks/useDrinks';
import { TDrinksData } from '../../types/drinksData';
import * as Styled from './styled';

type MenuProps = {
  category?: string;
};

const Menu = ({ category }: MenuProps) => {
  const { data: drinks, error, isLoading } = useDrinks({ category });
  const titleCategories = [
    {category: 'drinks', title: 'Drinks'},
    {category: 'whiskeys', title: 'Bebidas'},
    {category: 'beers', title: 'Cervejas'},
  ]
  if (isLoading) return <p>Carregando...</p>
  if (error) return <p>Erro: {error.message}</p>

  return (
    <Styled.Container>
      <Styled.Title>{category ? titleCategories.find(item => item.category === category)?.title : 'Todos os Drinks'}</Styled.Title>
      <Styled.List>
        {drinks?.map((item: TDrinksData) => (
          <Styled.Item key={item.id}>
            <div>
              <h1>{item.name}</h1>
              <span>{item.description}</span>
              <p>R$ {item.amount}</p>
            </div>
            {item.photo && <img src={item.photo} alt={item.name} />}
          </Styled.Item>
        ))}
      </Styled.List>
    </Styled.Container>
  )
}

export default Menu