import styled from "@emotion/styled"
import { GiHamburgerMenu } from "react-icons/gi";
import logo_white from '../pictures/logo_white.png';
import React, { useState } from "react";
import Sidebar from "./Sidebar";



const HeaderStyle = styled.div`
  background-color: #262626;
  height: 70px;
  box-sizing: border-box;
  display: flex;
  weight: 100vw;
  z-index: 10;
  justify-content: space-between;
  top: 0;
  position: sticky;
  border-bottom: 2px solid #730202;
`

const BurgerIcon = styled.button`
  color: #BF1304;
  font-size: 64px;
  padding: 0;
  margin: 5px 5px 5px 15px;
  position: relative;
  background: none;
  border: 0;
  &:hover{
    cursor: pointer;
  }
`

const RavenIcon = styled.img`
  margin: 5px 15px 5px 5px;
  &:hover{
    cursor: pointer;
  }
`


const Header = () => {

    const [isShown, setIsShown] = useState(false);

    const toggleFIeldset = () => setIsShown(!isShown);

    return(
        <>
            <HeaderStyle>
            <div>
              <BurgerIcon>
                    <GiHamburgerMenu onClick={toggleFIeldset}/>
                </BurgerIcon>
                </div>  
            <div>

            <a href="#top">              
            <RavenIcon
                  src={logo_white} width="60" alt="raven">
              </RavenIcon>
            </a>
              </div> 
            {
                isShown ?  <Sidebar active={true}/> : <Sidebar active={false}/>
            } 
            </HeaderStyle>

        </>
    )
}

export default Header;