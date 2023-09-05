import styled from "@emotion/styled";
import { useState } from "react";
import main from '../videos/fonFour.mp4';
import './style.css';

const IntroStyle = styled.div`
  margin: 0vh 0 0 -40vw;
  width: 20vw;
`


// 4 разных текста + к ним useState на смену цвета при клике
const Text = styled.button` 
  margin: 10px;
  font-family: 'Roboto', sans-serif;
  color: #F2F2F2;
  font-size: 3rem;
  background: none;
  border: none;
  transition: 0.5s;
  text-shadow: 0.3em 0.4em 2px #402525;
  &:hover{
      cursor: pointer;
      color: #BF1304;
  }
  @media (max-width: 1000px){
    font-size: 2rem;
  }
`


const Description = styled.div`
  margin: 0px;
  color: #c4c4c4;
  font-family: 'Roboto', sans-serif;
  transition: 3s;
  font-size: 1rem;
  margin-left: 2vw;
  width: 20vw;
  text-shadow: 0.3em 0.4em 2px #361818;
  @media (max-width: 1000px){
    font-size: 0.7rem;
  }
  @media (max-width: 700px){
    width: 50vw;
    margin-left: 20px;
  }
`

const First = () => { 

    let [onPrints, setOnPrints] = useState(false);
    let [onCloth, setOnCloth] = useState(false);
    let [onCut, setCut] = useState(false);
    let [onPrint, setOnPrint] = useState(false);

    

    return(
        <>
        <div class="full-screen">
        <a name='first'></a>
				<div class="full-screen__body">
                <IntroStyle>
                
            <div>
                <Text onClick={() => {setOnPrints(!onPrints); setOnCloth(false); setCut(false); setOnPrint(false);}}>  
                    Принты
                </Text>
                {onPrints && 
                <Description >
                    Уникальные и неповторимые принты, которые рисуются опытными художниками специально для вашего образа.
                </Description>
                }
                
            </div>
            <div>
                <Text onClick={() => {setOnPrints(false); setOnCloth(!onCloth); setCut(false); setOnPrint(false);}}>     
                    Ткань
                </Text>
                {onCloth && 
                <Description>
                    В качестве материала худаков мы берем только качественную ткань из натурально хлопка. Которая не скатывается, не облазит и просто не теряет вид.
                </Description>
                }

            </div>
            <div>
                <Text onClick={() => {setOnPrints(false); setOnCloth(false); setCut(!onCut); setOnPrint(false);}}> 
                    Крой
                </Text>
                {onCut && 
                <Description>
                    Вся одежда «Rage Raven» отшивается в России умелыми мастерами с многолетним опытом. Данный крой был выведен из 10 других кроев, имеющих свои недостатки. Это самый оптимальный, удобный и стилевый крой. Честно)
                </Description>
                }
            </div>
            <div>
                <Text onClick={() => {setOnPrints(false); setOnCloth(false); setCut(false); setOnPrint(!onPrint);}}> 
                    Печать
                </Text>
                {onPrint && 
                <Description>
                    Все принты из коллекции «БЕСкультурье» сделаны методом цифровой печати. Этот метод позволяет передать все цвета яркими и красочными. Также, принт обладает устойчивостью к износу и выцветанию, после первой стирки краски не слезут. Да и зачем вам стирать принт, он же съемный.
                </Description>
                }
            </div>
            </IntroStyle>
				</div>


                <video autoPlay muted pip="false" loop class="full-screen__video">
					<source id='123' type="video/mp4" src = {main}/>
				</video>


			</div>
        </>
    )
    }

export default First;