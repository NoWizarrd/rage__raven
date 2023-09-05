import styled from "@emotion/styled";
import { useState } from "react";
import main from '../videos/fonAbout.mp4';
import GoalText from "./GoalText";
import './style copy.css';
import Modal from './ModalPicture'
import Contacts from "./Footer";


const CloseButton = styled.button`
    color: white;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    font-family: 'Roboto', sans-serif;
    height: 6vh;
    background: #262626;
    border: #BF1304 solid 2px;
    border-radius: 10px;
    font-size: 1em;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        color: #BF1304;
    }
    @media (max-width: 1600px){
    font-size: 0.9rem;
    height: 4vh;
  }
  @media (max-width: 770px){
    font-size: 0.8rem;
    height: 3vh;
  }

`

const TextForm = styled.p`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    text-transform: none;
    padding: 0px 20px;
    @media (max-width: 1650px){
    font-size: 1.1rem;
    padding: 0 15px;
  }
  @media (max-width: 1400px){
    font-size: 0.9rem;
    padding: 0 5px;
  }
  @media (max-width: 1200px){
    font-size: 0.85rem;
    padding: 0 5px;
  }
  @media (max-width: 1000px){
    font-size: 0.9rem;
    padding: 0 5px;
  }
  @media (max-width: 700px){
    font-size: 0.7rem;
    padding: 0 5px;
  }
`

const BtnDetail = styled.button`
  margin: 0vh 0 10vh 0vw;
  width: 20vw;
  font-family: 'Roboto', sans-serif;
  color: #F2F2F2;
  font-size: 2.5rem;
  background: none;
  border: none;
  transition: 0.5s;
  &:hover{
      cursor: pointer;
      color: #BF1304;
  }
  @media (max-width: 1300px){
    font-size: 2rem;
  }
  @media (max-width: 900px){
    font-size: 1.7rem;

  }
  @media (max-width: 600px){
    font-size: 1.4rem;
  }
`


const Last = () => { 

    let [modalActive, setModalActive] = useState(false);
    {
        modalActive 
        ? document.getElementsByTagName("body")[0].style.overflow = 'hidden' 
        : document.getElementsByTagName("body")[0].style.overflow = 'auto'
    }

    return(
        <>
        <div class="full-screen">
        <a name='goal'></a>
			<div class="full-screen__body">
                
            <GoalText/>
            
            <BtnDetail onClick={() => setModalActive(true)}>
                    Подробнее
                </BtnDetail>
                <Modal active={modalActive} setActive={setModalActive}>
                            <TextForm>
                            Ну че, вот мы и вернулись, мы, Раги Равен!, первые барыги спизженных шапок с ушами, которые построили на этом многомиллиардный капитал. На эти деньги мы скупили всю крипто валюту мира и случайно её обвалили. Поэтому сейчас мы врываемся в тему NFT и делаем свою коллекцию.
                            </TextForm>
                            <TextForm>
                            Данная NFT коллекция «Бескультурье» является первым проектом, который интегрирован в реальную жизнь. Каждый токен имеет в комплекте еще и реальный худак с паспортом для жестких выебонов.
                            </TextForm>
                            <TextForm>
                            Всем тем, кто шарит – пару слов.
                            Заходим на OpenSea по ссылочке, и покупаем NFT, далее связываемся с нами, и мы отправляем худак в ваше захолустье. Цены на токен приемлемые, количество ограничено 10 штуками.
                            Так что дерзайте, это невьебенный вклад нам на еду. Но когда, мы стрельнем, эта NFT может подорожать в миллионы тысяч раз и стать гипер-супер-пупер-ультра-мега-овер дорогим.
                            На паспорте и шевроне на худаке содержится QR-код, который перенаправляет на сайт OpenSea с вашей NFT.
                            </TextForm>
                            <TextForm>
                            А всем тем, кто не в теме и не хочет разбираться, такие худаки можно купить на WB, без паспорта и привязки к NFT.
                            Амбиций у нас хоть жопой жуй, так что все самое интересное только впереди, мы планируем основательно развиваться в этой теме и делать что-то интересное, так что следите за нами.
                            А теперь прощаться на полгода. Не хворайте
                            </TextForm>
                        <CloseButton onClick={() => setModalActive(false)}> Закрыть </CloseButton>
                </Modal>
            </div>
            <Contacts/>
            <video autoPlay muted pip="false" loop class="full-screen__video">
					<source type="video/mp4" src = {main}/>
				</video>
                
		</div>
        </>
    )
    }

export default Last;