import React,{useRef} from 'react'
import './Socials.css'
import emailjs from '@emailjs/browser';


const Socials = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pu713iv', 'template_mrytgfq', form.current, {
        publicKey: 'kkUw1wkLlQ2d5XaNX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
     
    <section id="contact" className='socials'>
      <div className='social'><h1> Feel free to reach out !</h1>
      <br/>
     
   <div className="item">
    <h2>Mail</h2>
    <span>drs.prabhu2018@gmail.com</span>
   </div>
   <div className="item">
    <h2>LinkedIn</h2>
    <span>Shashwath Prabhu</span>
    
   </div>
   <div className="item">
    <h2>Phone</h2>
    <span>+91 6361230542</span>
    
   </div>
   </div>
 <br/>
 <br/>
 <br/>
 <br/>
   <div className="container">
   <form ref={form} onSubmit={sendEmail}>
         <label>Name</label>
         <input type="text" name="user_name" required placeholder="Name" />
         <label>Email</label>
         <input type="email" name="user_email" required placeholder="Email" />
         <label>Message</label>
         <textarea  rows ="8" name="message" placeholder="Message" />
         <button type="submit" value="Send">Submit</button>  
       </form>
   </div>

   </section>

   </> 
    
  )
}

export default Socials
