import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import ContactWeb3 from "../components/ContactWeb3Form";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <PageHeader hText="Contact" />
      
      <ContactWeb3/>
      
    </>
  )
};

export default Contact