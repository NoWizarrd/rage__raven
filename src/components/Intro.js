import main from '../videos/fonMain.mp4';
import './style.css';





const MainBlock = () => { 


     
    return(
        <>
        <div class="full-screen">
				<div class="full-screen__body">
				</div>
                
				<video autoPlay pip="false" muted loop class="full-screen__video">
					<source type="video/mp4" src = {main}/>
				</video>
			</div>
        </>
    )
    }

export default MainBlock;