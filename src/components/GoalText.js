import styled from "@emotion/styled";


const GoalStyle = styled.div`
  margin: 10vh 0 5vh -40vw;
  width: 20vw;
  @media (max-width: 900px){
    margin: 10vh 0 5vh -60vw;
  }
`

const Text = styled.div`
  margin: 10px;
  color: #F2F2F2;
  font-size: 3rem;
  background: none;
  width: 20vw;
  border: none;
  transition: 0.5s;
  text-shadow: 0.3em 0.4em 2px #402525;
  @media (max-width: 1300px){
    font-size: 2rem;
  }
  @media (max-width: 900px){
    font-size: 2rem;
    min-width: 45vw;
  }
  @media (max-width: 600px){
    font-size: 1.5rem;
    min-width: 45vw;
  }
`


const Description = styled.div`
  margin: 0px;
  color: #c4c4c4;
  transition: 3s;
  font-size: 1.2rem;
  margin-left: 2vw;
  width: 20vw;
  text-shadow: 0.3em 0.4em 2px #361818;
  @media (max-width: 1300px){
    font-size: 1.1rem;
  }
  @media (max-width: 900px){
    font-size: 1.1rem;
    min-width: 40vw;
  }
  @media (max-width: 600px){
    font-size: 1rem;
    min-width: 40vw;
    margin-left: 4vw;
  }

`

const Text2 = styled.div`
  margin: 10px;
  margin-top: 100px;
  margin-left: 100px;
  color: #F2F2F2;
  width: 20vw;
  font-size: 3rem;
  background: none;
  border: none;
  transition: 0.5s;
  text-shadow: 0.3em 0.4em 2px #402525;
  @media (max-width: 1300px){
    font-size: 2rem;
  }
  @media (max-width: 900px){
    font-size: 2rem;
    min-width: 45vw;
  }
  @media (max-width: 600px){
    font-size: 1.5rem;
    min-width: 45vw;
  }
`


const Description2 = styled.div`
  margin: 0px;
  color: #c4c4c4;
  transition: 3s;
  font-size: 1.2rem;
  margin-left: 130px;
  width: 20vw;
  text-shadow: 0.3em 0.4em 2px #361818;
  @media (max-width: 1300px){
    font-size: 1.1rem;
  }
  @media (max-width: 900px){
    font-size: 1.1rem;
    min-width: 40vw;
  }
  @media (max-width: 600px){
    font-size: 1rem;
    min-width: 35vw;
    margin-left: 120px;
  }
`


const GoalText = () => { 
    return(
        <>
<div class="full-screen">
				<div class="full-screen__body">
        <GoalStyle>
            <div>
                <Text>  
                    Наша миссия
                </Text>
                <Description >
                    Нашей миссией является создание отечественного бренда с поистине качественным продуктом, который отличается своей уникальностью, дизайном и подходом к взаимоотношениям с потребителем.
                </Description>
            </div>
            <div style={{marginLeft: '30vw'}}>
                <Text2>     
                    Наша цель
                </Text2>
                <Description2>
                    Постоянное расширение ассортимента как по стилистике одежды, так и по товарному ряду. Внесение в массы инновационных подходов и фишек в одежде.
                </Description2>
            </div>
            </GoalStyle>
				</div>


			</div>
        </>
    )
}

export default GoalText