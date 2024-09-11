
import './Services.css'

import PageHeader from '../components/PageHeader';
import ServicesCardComponent from '../components/ServicesCardComponent';

import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const handleGoToContact = () => navigate("/Contact");

  return (
    <>
      <PageHeader hText="Services" />
      <div className='ServicesContainer'>
        <h1>The Drone Services you Need, Whatever the Project!</h1>
        <button onClick={handleGoToContact}>Book Us Now!</button>
        <p>You can get exactly the aerial media you need regardless of your project requirements. That’s because at Sky Solutions NW we offer a variety of high-quality drone services.</p>
        <p>We are experts in the taking and editing of both photography and videography. Here’s a list of our most popular services.</p>
        <p> Contact us if you need something not listed here!</p>
      </div>

      <div className='ServicesCardContainer'>
        <ServicesCardComponent />
        <ServicesCardComponent />
        <ServicesCardComponent />
        <ServicesCardComponent />
      </div>

    </>
  )
};

export default Services