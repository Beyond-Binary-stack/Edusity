import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "07fdc0c8-907a-4aaa-a5ad-3167257ec85a");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div>
        <div className="contact">
            <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                Please feel free to get in touch via the contact form or use the contact details below. 
                Your feedback, enquiries, and suggestions are valued as we aim to deliver outstanding service 
                to our university community.
                </p>
            <ul>
                <li> <img src={mail_icon} alt="" />Anas@Beyond-Binary.dev</li>
                <li> <img src={phone_icon} alt="" />+44 20 7946 0958</li>
                <li> <img src={location_icon} alt="" />999 University Road, London, UK</li>
            </ul>

            </div>
            <div className="contact-col">

                <form onSubmit={onSubmit}>
                    <label>Enter Your Name</label>
                    <input type="text" name="name" placeholder='Enter your name' required/>
                      
                    <label>Phone Number</label>   
                    <input type="tel" name="phone" placeholder='Enter your mobile number' required/>

                    <label>Write Your Message Here</label>
                    <textarea name="message" rows="5" placeholder='Enter Your Message' required></textarea>
                    <button className='btn dark-btn'>Submit now  <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    </div>
  )
}

export default Contact