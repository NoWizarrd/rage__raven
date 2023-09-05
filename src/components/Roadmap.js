import roadmap from '../pictures/Palka.png'
import styled from '@emotion/styled'
import { useState } from "react";
import './roadmap.css'


const RoadStyle2 = styled.div`
  position: flex;
  background: none;
  height: 40px;
  margin-bottom: 70vh; 
`


const Zagolovok = styled.span`
  color: #BF1304;
  font-size: 1.5rem;
  text-shadow: 0.3em 0.2em 3px rgba(150, 18, 6, 0.5);
  @media (max-width: 1300px){
    font-size: 1.3rem;
  }
  @media (max-width: 750px){
    font-size: 1rem;
  }
`


const RoadMap = () => {

  let [first, setOnfirst] = useState(false);
  let [second, setOnsecond] = useState(false);
  let [third, setOnthird] = useState(false);
  let [four, setOnfour] = useState(false);
  let [five, setOnfive] = useState(false);


    return(
        <>
          <RoadStyle2>
            <div class="container">
            <h1 >Roadmap</h1>
              <img src={roadmap} alt="Roadmap"/>
              <button class="btn1" onClick={() => {setOnfirst(!first); setOnsecond(false); setOnthird(false); setOnfour(false); 
                setOnfive(false)}} ></button>
              {first && 
                <div class="disc1">
                  <Zagolovok>
                    1-й этап
                  </Zagolovok><br/>
                    Выявление потребителей, наработка опыта.
                      Самым первым делом перед нами стояла задачи понять, кто наш потребитель, 
                      его вкусы к одежде и особенности. Были сделаны пробные продажи, проанализирована потребность покупателей. 
                </div>
                }

              <button class="btn2" onClick={() => {setOnfirst(false); setOnsecond(!second); setOnthird(false); setOnfour(false); 
                setOnfive(false)}} ></button>
                {second && 
                <div class="disc2">
                   <Zagolovok>
                  2-й этап
                  </Zagolovok><br/>
                Дебютная коллекция «Бескультурье»
                Долгий процесс подготовки к дебюту, отрисовка принтов, создание паспортов к худаку на основе NFT токена,
                 который можно продать. И главное - новый продукт, который отличается тем, что картинку на вещи не обязательно 
                 носить вечно, её можно и менять. Съемные картинки со смыслом и оригинальным дизайном будут отличительной особенностью с любыми другими худаками.                
                </div>
                }

              <button class="btn3" onClick={() => {setOnfirst(false); setOnsecond(false); setOnthird(!third); setOnfour(false); 
                setOnfive(false)}} ></button>
                {third && 
                  <div class="disc3">
                        <Zagolovok>
                 3-й этап
                 </Zagolovok><br/>
                Создание коллекций с наиболее уникальными принтами, связанными с NFT токеном. 
                Повышение спроса на NFT и тем самым повышение его стоимости.
                 </div>
                }

              <button class="btn4" onClick={() => {setOnfirst(false); setOnsecond(false); setOnthird(false); setOnfour(!four); 
                setOnfive(false)}} ></button>
                {four && 
                <div class="disc4">
                  <Zagolovok>
                    4-й этап
                  </Zagolovok><br/>
                    Создание коллекций на основе коллобораций с другими художниками. 
                    С каждой новой коллекцией ценность самых первых и раритетных NFT возрастает.
                </div>
                }

              <button class="btn5" onClick={() => {setOnfirst(false); setOnsecond(false); setOnthird(false); setOnfour(false); 
                setOnfive(!five)}} ></button>
                {five && 
                <div class="disc5">
                  <Zagolovok>
                    5-й этап
                  </Zagolovok><br/>
                    Создание полностью уникальных вещей конечным потребителем с привязкой к NFT.
                </div>
                }

            </div>

            

          </RoadStyle2>
        </>
    )
}

export default RoadMap;