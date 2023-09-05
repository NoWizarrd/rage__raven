import React from "react";
import styled from '@emotion/styled'

const SidebarParent = styled.div`
display: flex;
position: fixed;
transition: all 0.2s ease-in-out;
justify-content: start; 
align-items: center;
top: 70px;
left: -100%;
  background: #1c1c1c;
  a {
    text-decoration: none;
  }
  min-width: 10%;
  & > div {
    height: 100vh;
  }
`;

const LinkSidebar = styled.a`
    text-decoration:none;
`

const SidebarItem = styled.div`
  padding: 4px 12px;
  transition: all 0.25s ease-in-out;
  font-family: 'Roboto', sans-serif;
  background: ${props => props.active ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  p:hover{
      color: #BF1304;
      transition: all 0.15s ease-in-out;
    cursor:pointer;}

`;

const SidebarItems = [
    {
        name: "Главная",
        route: '#top'
    },
    {
        name: "О⠀нас",
        route: '#first',
    },
    {
        name: "NFT⠀Токены",
        route: '#tokens'
    },
    {
        name: "RoadMap",
        route: '#roadmap'
    },
    {
        name: "Наша⠀цель",
        route: '#goal'
    },
    {
        name: "Контакты",
        route: '#bottom'
    },
]; 


function Sidebar(props) {
    return (
        <>
        {
            props.active ? 
            <SidebarParent style={{left: 0}}>
                <div>
                {
                    SidebarItems.map((item,index)=> {
                        return (
                                <SidebarItem key={item.name}>
                                <LinkSidebar href={item.route}><p>{item.name}</p></LinkSidebar>
                                </SidebarItem>
                        );
                    })
                }
                </div>
            </SidebarParent>
            :
            <SidebarParent style={{left: '-100%'}}>
                <div>
                {
                    SidebarItems.map((item,index)=> {
                        return (
                                <SidebarItem key={item.name}>
                                <p>{item.name}</p>
                                </SidebarItem>
                        );
                    })
                }
                </div>
            </SidebarParent>
        }
        </>
    );
}

export default Sidebar;