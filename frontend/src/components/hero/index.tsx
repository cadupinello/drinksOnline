import Instagram from '../../assets/icons/instagram'
import MapIn from '../../assets/icons/map-in'
import Whatsapp from '../../assets/icons/whatsapp'
import Logo from "../../assets/logobar.png"
import * as Styled from './styled'

const Hero = () => {

  return (
    <Styled.Container>
      <img src={Logo} alt="hero" />
      <Styled.Title>Faustino Drinks</Styled.Title>
      <Styled.Address>
        <MapIn />  Endereço do restaurante - <Styled.Link href="#">Ver no mapa</Styled.Link>
      </Styled.Address>
      <Styled.SocialMedias style={{ display: "flex" }}>
        <div>
          <Whatsapp />
          <Styled.Link href="#" className='social-medias'>(11) 99999-9999</Styled.Link>
        </div>
        <div>
          <Instagram />
          <Styled.Link href="#" className='social-medias'>@faustinoDrinks</Styled.Link>
        </div>
      </Styled.SocialMedias>
    </Styled.Container>
  )
}

export default Hero