
import '../App.css';
import '../load.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';
import { MetroSpinner,PushSpinner } from "react-spinners-kit";

function Form(props) {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setloading(false);
  const notifya = () => {
    toast(<b>PLEASE  FILL INFORMATION !</b>, {
      position: toast.POSITION.TOP_RIGHT
  });
  }
  const notifyp = () => {
    toast(<b> Thankyou , We will contact you soon !</b>, {
      position: toast.POSITION.TOP_RIGHT
  });
  }

  const handleShow1 = () => {
    console.log("kushal")
  
    setloading(true);
  }


  const [name, setName] = useState('');
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

 async function callfun(){
  
    var object={
      name:name,
      email:email,
      phone:phone,
      text:message,
      to :"kushalhts00@gmail.com",
     
      subject:"CONTACT FORM ",
    
    }

   console.log(object)

  
   if(name === "" || email === "" || phone === "" || message === ""){
    notifya()
    return;
   }
   handleShow1();

   setTimeout(() => {
    handleClose1();
  }, 3000);
 
  await  axios.post('/send-email', object)
  .then((res) => {
    // Handle success response here
    console.log(res.data);
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    notifyp()
    handleClose1();
   
  })
  .catch((error) => {
    // Handle error here
    console.error(error);
  });
  }
  return (
    <div className="App" style={{marginTop:'20px'}}  ref={props.pass}>
         {/* <Modal show={show1} onHide={handleClose1} size="lg">
      <Modal.Header closeButton className="modalcolor">
        <Modal.Title>hi</Modal.Title>
      </Modal.Header>
      <Modal.Body>You are only step away to get !



        

        <Button variant="dark"  onClick={handleClose1}>
            Cancel
          </Button>

      </Modal.Body>

    </Modal> */}





      <section id="contact">
        <h1 class="h-primary center" >Contact Us</h1>
        <div id="contact-box">
            <form action="">
                <div class="form-group">
                    <label for="name" className="custom-label">Name: </label>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="name" id="name" value={name} placeholder="Enter your name" className="custom-input" />

                </div>
                <div class="form-group">
                    <label for="email" className="custom-label">Email: </label>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="name" id="email" value={email} placeholder="Enter your email" className="custom-input" />
                </div>
                <div class="form-group">
                    <label for="phone" className="custom-label">Phone Number: </label>
                    <input type="phone" name="name" id="phone" onChange={(e)=>{setPhone(e.target.value)}} value={phone} placeholder="Enter your phone" className="custom-input" />
                </div>
                <div class="form-group">
                    <label for="message" className="custom-label">Message: </label>
                    <textarea name="message" id="message" onChange={(e)=>{setMessage(e.target.value)}} value={message} cols="30" rows="5" className="custom-input"></textarea>
                </div>
                <div class="form-group">
                <label for="message" className="custom-label"> </label>
                {loading ? (
   <div className="">
        <div className="">
        <MetroSpinner size={40} color="black" 
            loading={loading} />
    </div>
    </div>
      ) : (
       
        <Button variant="warning" className="custom-label" style={{fontWeight:'bolder'}} onClick={() => callfun()}>
        Submit
      </Button>
      
      )}
 

               
                </div>
            </form>
        </div>
    </section>
    <ToastContainer  />
    </div>
  );
}

export default Form;
