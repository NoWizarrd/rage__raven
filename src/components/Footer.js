import vk from '../pictures/vk.png'
import logo_black from '../pictures/logo_black.png'
import styled from '@emotion/styled'
import './styleFooter.css';

const ContactsStyle = styled.div`
    width: 100vw;
    border-top: 2px solid #730202;
    border-bottom: 2px solid #730202;
    padding: 15px 0 15px 0;

`

const Logo = styled.img`
  @media (max-width: 513px){
    width: 70px;
}
`
const Vk = styled.img`
  @media (max-width: 513px){
    width: 30px;
}
`

const Block1 = styled.div`
    justify-content: center;
    align-items: center;
    display: inline-block;
    margin: 0vh 0 0 20vh;
    @media (max-width: 513px){
        margin: 0vh 0 0 5vh;
}
`

const Text = styled.div`
  color: #F2F2F2;
  font-size: 1.2rem;
  @media (max-width: 513px){
    font-size: 1rem;
}
`

const Text2 = styled.div`
display: inline-block;
  color: #F2F2F2;
  font-size: 1rem;
  @media (max-width: 513px){
    font-size: 0.8rem;
}
`
const DualBlock = styled.div`
display: inline-block;
margin-left: 1vw;

`

const Contacts = () => {
    return(
        <>
        <div class="full-screen1">
				<div class="full-screen__body1">

                <ContactsStyle>
                <Block1>
            <Logo
                src={logo_black} width="100" alt="raven_black">
            </Logo>
            <Text>
                Контакты
            </Text>
            </Block1>
            <DualBlock>
            <Text2>
                rageraven2021@gmail.com 
            </Text2>
            <div>
            <a href="https://vk.com/rage_raven" target="blank" >
                <Vk
                    src={vk} width="50" alt="vk">
                </Vk>
            </a>
            </div>
            </DualBlock>
        </ContactsStyle>

				</div>


                <a name= 'bottom'></a>

			</div>
        </>
    )
}

export default Contacts;