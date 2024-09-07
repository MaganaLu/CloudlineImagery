import video from '../assets/videos/Test1.mp4';
import bnwWaves from '../assets/black_white_waves.svg';
import colorWaves from '../assets/colorWaves.svg';

import './Home.css';

const Home = () => {
    return (
      <>
     
        <div className="videoContainer">   
            <video id = 'videoPlayer' autoPlay loop muted >
                <source src={video} type="video/mp4"/>
            </video>
            <div class="overlayText">
                <p id="topText">Premium Full Spectrum Aerial Photography and Videography Solutions </p>
                <p id="topSubText">For your personal or business needs in WA.</p>
                <button className='CustomButton' onClick={() => alert("You clicked the button")}>Book Now!</button>
            </div>
        </div>
        <img className="wavesSVG" src={colorWaves}/>
        <div className="aboutSection">
            <h2>
                Expert in drone services, video production, and aerial photography for Seattle and the Pacific Northwest. Bringing you top-quality visuals and cutting-edge technology. 
            </h2>
            <p>
                Drone services solve a wide variety of common problems quickly and cheaply for businesses ranging from real estate to industrial.
            </p>
            <p>
                We have extensive experience with aerial cinematography and aerial photography Seattle and the Puget Sound region. The quality of our drone services work speaks for itself, 
                both in the field and the editing room- take a look at our Portfolio page for examples.
            </p>
            <p>
                Contact us today for prices and availability!
            </p>
        </div>
      </>
    )
};
  
export default Home