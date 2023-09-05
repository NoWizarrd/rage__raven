import './style.css';
import main from '../videos/intro.mp4';
import styled from "@emotion/styled";
import './style.css';


const Style = styled.div`
height: 100%;
width: 100%;
float: left;
top: 0;
padding: none;
position: fixed; 
z-index: 20;
`


const IntroVideo = () => { 
  
  return(
    <>   
            <Style>
            <video  autoPlay muted pip="false">
                <source type="video/mp4" src = {main}/>
            </video>
            </Style>
    </>
)
    }

export default IntroVideo;