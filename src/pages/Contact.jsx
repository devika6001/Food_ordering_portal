import "../styles/checkout.css";
import { BsPersonCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg">
      <div className="checkoutMessage">
        <h3><u>Creators</u></h3><br />
        <BsPersonCircle className="contactIcon" /><span className="creator"> Stuti Sharma</span><br /><br />
        <BsPersonCircle className="contactIcon" /><span className="creator"> Aarushee Krishna</span><br /><br />
        <BsPersonCircle className="contactIcon" /><span className="creator"> Devika Gupta</span><br /><br />
        <BsPersonCircle className="contactIcon" /><span className="creator"> Mitul Jain</span><br /><br />
      </div>
    </div>
  );
};

export default Contact;