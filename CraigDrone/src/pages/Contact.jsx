import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import './Contact.css';

const Contact = () => {
  return (
    <>
      <PageHeader hText="Contact" />
      <h2 className="h2Contact">Book a Shoot Now, Contact us using the form below or call (xxx)xxx-xxxx </h2>
      <ContactForm />

      
    </>
  )
};

export default Contact