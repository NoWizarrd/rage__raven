import styled from "@emotion/styled";
import { useState } from "react";
import main from '../videos/дополнительный.mp4';
import './style.css';
import RoadMap from "./Roadmap";



const Second = () => { 


    let [modalActive, setModalActive] = useState(false);
    {
        modalActive 
        ? document.getElementsByTagName("body")[0].style.overflow = 'hidden' 
        : document.getElementsByTagName("body")[0].style.overflow = 'auto'
    }

    

    return(
        <>
        <div class="full-screen">
        <a name='roadmap'></a>
				<div class="full-screen__body">

                <RoadMap>

                </RoadMap>

				</div>
                
				<video autoPlay muted pip="false" loop class="full-screen__video">
					<source type="video/mp4" src = {main}/>
				</video>
			</div>
        </>
    )
    }

export default Second;