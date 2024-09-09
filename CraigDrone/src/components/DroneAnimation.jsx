import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/DroneAnimation.json';

const divStyle = {
  display:'flex',
  position:'relative',
  marginTop:-100,
  zIndex:'10',
};

export default function DroneAnimation() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div style={divStyle}>
      <Lottie 
	    options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  );
}
