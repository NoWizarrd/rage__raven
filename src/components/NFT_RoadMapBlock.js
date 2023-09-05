import main from '../videos/fonNFT_RoadMap.mp4';
import angelvideo from '../videos/NFT ангел.mp4';
import davidvideo from '../videos/NFT давид.mp4';
import depravityvideo from '../videos/NFT разврат.mp4';
import meduzavideo from '../videos/NFT медуза.mp4';
import noculturevideo from '../videos/NFT бескультурье.mp4';
import notastevideo from '../videos/NFT безвкусие.mp4';
import notwarvideo from '../videos/NFT апофеоз.mp4';
import Pompeivideo from '../videos/NFT помпеи.mp4';
import powervideo from '../videos/NFT сила.mp4';
import rukivideo from '../videos/NFT руки.mp4';



import angel from '../pictures/prints/angel3.jpg';
import david from '../pictures/prints/david2.jpg';
import depravity from '../pictures/prints/depravity.jpg';
import meduza from '../pictures/prints/meduza.jpg';
import noculture from '../pictures/prints/noculture.jpg';
import notaste from '../pictures/prints/notaste.jpg';
import notwar from '../pictures/prints/notwar2.jpg';
import Pompei from '../pictures/prints/Pompei.jpg';
import power from '../pictures/prints/power.jpg';
import ruki from '../pictures/prints/ruki.jpg';

import angelpreview from '../pictures/preview/ангел.jpg';
import davidpreview from '../pictures/preview/давид.jpg';
import depravitypreview from '../pictures/preview/разврат.jpg';
import meduzapreview from '../pictures/preview/медуза.jpg';
import noculturepreview from '../pictures/preview/бескультурье.jpg';
import notastepreview from '../pictures/preview/безвкусие.jpg';
import notwarpreview from '../pictures/preview/апофеоз.jpg';
import Pompeipreview from '../pictures/preview/цензура.jpg';
import powerpreview from '../pictures/preview/сила.jpg';
import rukipreview from '../pictures/preview/руки.jpg';

import './swiper.css';
import './video.css';
import './style.css';

import styled from "@emotion/styled";
import Modal from './ModalPicture copy'
import { useState } from "react";




window.addEventListener("load", () => {
  var carousels = document.querySelectorAll(".carousel-3d");
  for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
  }
});
function carousel(root) {
  var figure = root.querySelector("figure"),
  nav = root.querySelector("nav"),
  images = figure.children,
  n = images.length,
  gap = root.dataset.gap || 0,
  bfc = "bfc" in root.dataset,
  theta = 2 * Math.PI / n,
  currImage = 0;
  setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
  });
  setupNavigation();
  function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
      for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
      for (i = 0; i < n; i++) {
          images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
          images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
      for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
      rotateCarousel(currImage);
  }
  function setupNavigation() {
      nav.addEventListener("click", onClick, true);
      function onClick(e) {
          e.stopPropagation();
          var t = e.target;
          if (t.tagName.toUpperCase() != "BUTTON") return;
          if (t.classList.contains("next")) {
              currImage++;
              } else {
              currImage--;
          }
          rotateCarousel(currImage);
      }
  }
  function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
  }
}

const Links = styled.div`
justify-content: space-between;
display: flex;
align-items: center;
margin-top: 10px;
`

const OpenSea = styled.a`
    margin: 0 20px 0 20px;
    text-transform: none;
    color: white;
    transition: 0.3s;
    
    text-decoration:none;
    &:hover{
        cursor: pointer;
        color: #BF1304;
    }
    @media (max-height: 800px){
      font-size: 0.7rem;
    }
    @media (max-width: 1100px){
      font-size: 0.6rem;
      margin: 0 0 0 10px;
    }
    @media (max-height: 640px){
        font-size: 0.5rem;
        
  }
  @media (max-width: 750px){
        margin: 0 0 0 10px;
        font-size: 0.5rem;
  }
`

const VKlink = styled.a`
    text-transform: none;
    color: #3075ff;
    transition: 0.3s;
    text-decoration:none;
    &:hover{
        cursor: pointer;
    }
`

const CloseButton = styled.button`
    color: white;
    position: relative;
    margin: 0 40px 0 20px;
    font-family: 'Roboto', sans-serif;
    height: 4vh;
    background: #262626;
    border: #BF1304 solid 2px;
    border-radius: 10px;
    font-size: 1em;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        color: #BF1304;
    }
    @media (max-height: 800px){
      font-size: 0.7rem;
    }
    @media (max-width: 1100px){
      font-size: 0.6rem;
    }
    @media (max-height: 640px){
        font-size: 0.5rem;
  }
  @media (max-width: 750px){
        margin: 0 10px 0 0;
        font-size: 0.5rem;
  }
`

const Opisanie = styled.p`
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    font-weight: 100;
    text-transform: none;
    padding: 0px 20px;
    @media (max-height: 800px){
      font-size: 0.7rem;
    }
    @media (max-width: 1100px){
      font-size: 0.6rem;
    }
    @media (max-height: 640px){
        font-size: 0.5rem;
  }
  @media (max-width: 750px){
        padding: 0;
        font-size: 0.5rem;
  }
`


const NftRoadMapBlock = () => { 

  let [modalActive1, setModalActive1] = useState(false);
  let [modalActive2, setModalActive2] = useState(false);
  let [modalActive3, setModalActive3] = useState(false);
  let [modalActive4, setModalActive4] = useState(false);
  let [modalActive5, setModalActive5] = useState(false);
  let [modalActive6, setModalActive6] = useState(false);
  let [modalActive7, setModalActive7] = useState(false);
  let [modalActive8, setModalActive8] = useState(false);
  let [modalActive9, setModalActive9] = useState(false);
  let [modalActive10, setModalActive10] = useState(false);
  


    return(

        <>
        <div className="full-screen">
        <a name='tokens'></a>
				<div className="full-screen__body">
        <div class="carousel-3d">
    <figure>
        <div onClick={() => {setModalActive1(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Ангел</h1><img src={angel} alt=""/></div>
        <div onClick={() => {setModalActive2(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Давид</h1><img src={david} alt=""/></div>
        <div onClick={() => {setModalActive3(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Разврат</h1><img src={depravity} alt=""/></div>
        <div onClick={() => {setModalActive4(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Медуза</h1><img src={meduza} alt=""/></div>
        <div onClick={() => {setModalActive5(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Бескультурье</h1><img src={noculture} alt=""/></div>
        <div onClick={() => {setModalActive6(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Безвкусие</h1><img src={notaste} alt=""/></div>
        <div onClick={() => {setModalActive7(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Апофеоз</h1><img src={notwar} alt=""/></div>
        <div onClick={() => {setModalActive8(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Цензура</h1><img src={Pompei} alt=""/></div>
        <div onClick={() => {setModalActive9(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Сила</h1><img src={power} alt=""/></div>
        <div onClick={() => {setModalActive10(true); document.getElementsByTagName("body")[0].style.overflow = 'hidden' }}><h1>Руки</h1><img src={ruki} alt=""/></div>
    </figure>
    <nav>
        <button class="nav prev"></button>
        <button class="nav next"></button>
    </nav>
</div>
                

    

      <Modal active={modalActive1} setActive={setModalActive1}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">

							<video id="video1" poster={angelpreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {angelvideo}/>  
							</video>
						</div>
            <div class="item__text">
              ВСЕГДА ЕСТЬ НАДЕЖДА И НАСТЯ
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
             <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive1(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';

           document.getElementById("video1").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922468339114049537' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


      <Modal active={modalActive2} setActive={setModalActive2}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video2" poster={davidpreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {davidvideo}/>
							</video>
						</div>
            <div class="item__text">
            Я беру глыбу мрамора и отсекаю от нее все лишнее. Я не идеал, но точка банк.
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive2(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video2").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922479334230327297' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


      <Modal active={modalActive3} setActive={setModalActive3}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video3" poster={depravitypreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {depravityvideo}/>
							</video>
						</div>
            <div class="item__text">
            "Мама, девочка, тело чье жаждало пробовать Помнит твою каждую проповедь."
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive3(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video3").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922476035695443969' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


        <Modal active={modalActive4} setActive={setModalActive4}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video4" poster={meduzapreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {meduzavideo}/>
							</video>
						</div>
            <div class="item__text">
            "Никогда не смотри ей в глаза, смотри на сиськи"
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive4(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video4").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922473836672188417' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


          <Modal active={modalActive5} setActive={setModalActive5}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video5" poster={noculturepreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {noculturevideo}/>
							</video>
						</div>
            <div class="item__text">
            "С моей точки зрения, единственная вещь, на которую стоит смотреть в большинстве музеев, — это школьницы на экскурсии."
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive5(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video5").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922471637648932865' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


          <Modal active={modalActive6} setActive={setModalActive6}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video6" poster={notastepreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {notastevideo}/>
							</video>
						</div>
            <div class="item__text">
            "Сущность человека можно определить, поняв сильный он или слабый, а слабость или сильность, определив его поняв"
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive6(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video6").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922470538137305089' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


        <Modal active={modalActive7} setActive={setModalActive7}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video7" poster={notwarpreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {notwarvideo}/>
							</video>
						</div>
            <div class="item__textApo">
            ............ (Наказание за «фейки» УК РФ дополняется новой статьей – 207.3 «Публичное распространение заведомо ложной информации об использовании 
            Вооруженных сил РФ», следует из текста законопроекта. Закон принят «в целях защиты интересов 
            РФ и ее граждан». Наказание за его нарушение – штраф в размере от 700 тысяч до 1,5 млн рублей и лишение свободы на срок до 3 лет.)
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в   
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive7(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video7").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922469438625677313' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


          <Modal active={modalActive8} setActive={setModalActive8}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video8" poster={Pompeipreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {Pompeivideo}/>
							</video>
						</div>
            <div class="item__text">
            "Неплохо было бы начать фильтровать базар - Ты права. Мент нас упаковывает в автозак Как дрова."
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive8(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video8").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922474936183816193' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>


          <Modal active={modalActive9} setActive={setModalActive9}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video9" poster={powerpreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {powervideo}/>
							</video>
						</div>
            <div class="item__text">
            "В силе все ищут нравственные добродетели, какие-то истины, брат - сила в ньютонах"
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive9(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video9").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922478234718699521' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>  


      <Modal active={modalActive10} setActive={setModalActive10}>
        <div class="items">
				  <div class="items__container">
						<div class="item__video">
							<video id="video10" poster={rukipreview} pip="false" controls controlsList="noremoteplayback" preload="auto">
								<source type="video/mp4" src = {rukivideo}/>
							</video>
						</div>
            <div class="item__text">
            Руку помощи не протягивают, а делают фистинг.
            </div>
				  </div>
			  </div>
          <Opisanie>
            Данный NFT интегрирован в реальную жизнь. Покупая данный токен, вы получаете в комплекте худи с принтом и паспортом вещи, 
            на котором расположен qr код перехода на сайт OpenSea. Теперь вы можете гулять по улицам в реальной одежде и показывать всем, 
            что это еще и NFT токен, который есть только у вас.
            <Opisanie>
              После покупки вам откроется кодовое слово, которое надо отправить нам в 
              <VKlink href='https://vk.com/rage_raven' target="_blank"> личные сообщения ВК</VKlink>, мы уточним все 
              детали и оперативно отправим вам худи с паспортом.
            </Opisanie>
          </Opisanie>
        <Links>
          <CloseButton onClick={() => {setModalActive10(false); document.getElementsByTagName("body")[0].style.overflow = 'auto';
          document.getElementById("video10").pause();}}> Закрыть </CloseButton>
            <OpenSea href='https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/77765163927062571248630684893947483101495970696162873819460922477135207071745' target="_blank">
              Перейти на токен в OpenSea
            </OpenSea>
         </Links>
      </Modal>              

				</div>
				<video autoPlay muted pip="false" loop className="full-screen__video">
					<source type="video/mp4" src = {main}/>
				</video>
			</div>
        </>
    )
    
    }

export default NftRoadMapBlock;