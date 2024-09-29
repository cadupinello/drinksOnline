import { useSearchParams } from 'react-router-dom'; // Para acessar o search da URL
import { useCart } from '../../context/useCart';
import { useDrinks } from '../../hooks/useDrinks';
import { TDrinksData } from '../../types/drinksData';
import * as Styled from './styled';
import Trash2 from '../../assets/icons/trash2';

type MenuProps = {
  category?: string;
};

type TItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
} & TDrinksData;

const Menu = ({ category }: MenuProps) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const { data: drinks, error, isLoading } = useDrinks({ category, search });

  const { cart, addToCart, removeToCart, finalizeOrder } = useCart();

  const titleCategories = [
    { category: 'drinks', title: 'Drinks' },
    { category: 'whiskeys', title: 'Bebidas' },
    { category: 'beers', title: 'Cervejas' },
  ];

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  const filteredDrinks = drinks?.filter(({ name }: TDrinksData) => name.toLowerCase().includes(search.toLowerCase()));

  const descriptionDots = (text: string) => {
    if (text.length > 30) {
      return `${text.slice(0, 30)}...`;
    }
    return text
  }

  return (
    <Styled.Container>
      <Styled.Title>
        {category ? titleCategories.find(item => item.category === category)?.title : 'Todos os Drinks'}
      </Styled.Title>
      <Styled.List>
      {filteredDrinks?.length ? (
          filteredDrinks.map((item: TItemProps) => (
            <Styled.Item key={item.id}>
              <div>
                <h1>{item.name}</h1>
                <span>{descriptionDots(item.description ?? '')}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <p>R$ {item.price}</p>
                  <button onClick={() => addToCart(item)}>Adicionar ao carrinho</button>
                  {cart.find(cartItem => cartItem.id === item.id) && (
                    <button className="trashIcon" onClick={() => removeToCart(item)}>
                      <Trash2 />
                    </button>
                  )}
                  {cart.find(cartItem => cartItem.id === item.id) && (
                    <span className="quantity">{cart.find(cartItem => cartItem.id === item.id)?.quantity}</span>
                  )}
                </div>
              </div>
              {item.photo && <img src={item.photo} alt={item.name} />}
            </Styled.Item>
          ))
        ) : (
          <p>Nenhum produto encontrado.</p>
        )}
      </Styled.List>
      {cart.length > 0 && (
        <Styled.Orders>
          <h1>Resumo do Pedido</h1>
          <p>Total: R$ {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
          <button onClick={finalizeOrder}>Finalizar pedido</button>
        </Styled.Orders>
      )}
    </Styled.Container>
  );
};

export default Menu;
