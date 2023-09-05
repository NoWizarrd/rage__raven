import './App.css';
import styled from "@emotion/styled"
import Header from './components/Header';
import MainBlock from './components/Intro';
import First from './components/FirstBlock';
import Second from './components/SecondBlock';
import NftRoadMapBlock from './components/NFT_RoadMapBlock';
import Last from './components/LastBlock';
import IntroVideo from './components/IntroVideo';
import { useState } from "react";


const Main = styled.div` 
  margin:0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
  overflow-y: auto;
`


function App() {

  let [modalActive1, setModalActive1] = useState(true);

  let bla = () => {
    setModalActive1(false)
  };

  setTimeout(bla, 5000);

  return (
    <>
      {
        modalActive1 &&
        <IntroVideo/>
      }
      <Header/>
      <Main>
        <MainBlock/>
        <First/>
        <NftRoadMapBlock/>
        <Second/>
        <Last/>
      </Main>

    </>
  );
}

export default App;
