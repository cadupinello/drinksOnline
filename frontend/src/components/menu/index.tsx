import { useEffect, useState } from 'react'
import * as Styled from './styled'

const Menu = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://localhost:3001/drinks')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        console.error('Failed to fetch data:', err)
      }
    })()
  }, [])
  
  console.log(data)
  return (
    <Styled.Container>
      <Styled.Title>Drinks</Styled.Title>
      <Styled.List>
        {data.map((item: any) => (
          <Styled.Item>
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