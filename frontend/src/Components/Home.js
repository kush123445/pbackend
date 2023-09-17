
import '../Home.css';
//Importing bootstrap and other modules
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
//import Razorpay from 'razorpay';

import Swal from 'sweetalert2';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Modal, Button, Form } from 'react-bootstrap';
import { MetroSpinner,PushSpinner } from "react-spinners-kit";

import useRazorpay from "react-razorpay";

function Home(props) {


  const [Razorpay] = useRazorpay();
  const [show, setShow] = useState(false);

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setloading(false);
  const [loading, setloading] = useState(false);
  const [value, setvalue] = useState('');
  const handleClose = () => setShow(false);
 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const handleShow = (valuepress) => {
    console.log(valuepress)
    setvalue(valuepress)
    setShow(true);
  }
  const handleShow1 = () => {
    console.log("kushal")
  
    setloading(true);
  }


  
  const notifyp = () => {
    toast(' YOUR ORDER IS CONFIRMED PLEASE CHECK EMAIL !', {
      position: toast.POSITION.TOP_RIGHT
  });
 
  }

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to server, etc.
    var data1 = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      amount: 500,
      p_name : "standard"
    }
    // console.log(formData);
    // Close the modal after form submission
    handleShow1()

    axios.post('/createOrder', data1)
      .then((res) => {
        console.log(res.data)
        handleClose1()
       
        if (res.data) {
          var options = {
            "key": "" + res.data.key_id + "",
            "amount": "" + res.data.amount + "",
            "currency": "INR",
            "name": "" + res.data.product_name + "",
            "description": "" + res.data.description + "",
            "image": "https://dummyimage.com/600x400/000/fff",
            "order_id": "" + res.data.order_id + "",
            "handler": async function (response) {
              //alert("Payment Succeeded");
              // window.open("/","_self"),

              const formData1 = {
                to: email,
                subject: " ORDER CONFIRM",
                text: " this mail is just for confirmation that your order is confirmed !!",
                name :res.data.name,
                p_name:res.data.product_name,
                address:address,
                phone:phone,
                order_id:res.data.order_id,
                amount:res.data.amount
              }
              notifyp()
              handleClose()
              
              console.log(formData1)
              try {

                fetch('/send-email', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json', // Set the request content type to JSON
                  },
                  body: JSON.stringify(formData1), // Convert the form data to JSON string
                })
                  .then((response) => {
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                    }
                    return response.json(); // Parse the response body as JSON
                  })
                  .then((data) => {
                    console.log('Response:', data); // Process the response data
                   // setShow(false);
                  
                  })
                  .catch((error) => {
                    console.error('Error:', error); // Handle any errors that occurred during the request
                  });
              } catch (error) {
                console.error('Error:', error);
              }

            },
            "prefill": {
              "contact": "" + res.contact + "",
              "name": "" + res.name + "",
              "email": "" + res.email + ""
            },
            "notes": {
              "description": "" + res.description + ""
            },
            "theme": {
              "color": "#2300a3"
            }
          };
          var razorpayObject = new Razorpay(options);
          razorpayObject.on('payment.failed', function (response) {
            alert("Payment Failed");
          });
          razorpayObject.open();
        }
        else {
          alert(res.msg);
        }
      })
  



};


return (

  <div className="maincontainer"  ref={props.pass}>

    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton className="gradient">
        <Modal.Title>{value}</Modal.Title>
      </Modal.Header>
      <Modal.Body>You are only step away to get !



        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>NAME:</Form.Label>
            <Form.Control
              type="text"
              
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              required

              
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>EMAIL:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              required

            
            />
          </Form.Group>

          <Form.Group controlId="formMessage">
            <Form.Label>ADDRESS:</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={address}
              onChange={(e) => { setAddress(e.target.value) }}
              required

             
            />
          </Form.Group>

          <Form.Group controlId="formName">
            <Form.Label>PHONE:</Form.Label>
            <Form.Control
              type="num"
              name="name"
              value={phone}
              onChange={(e) => { setPhone(e.target.value) }}
              required

             
            />
          </Form.Group>

          {loading ? (
   <div className="">
        <div className="">
        <MetroSpinner size={40} color="black" 
            loading={loading} />
    </div>
    </div>
      ) : (
        <Button variant="warning" type="submit" className='gradient'> 
        Pay Online
      </Button>
      )}

          
          
        </Form>

        <Button variant="dark"  onClick={handleClose}>
            Cancel
          </Button>

      </Modal.Body>

    </Modal>






    <section>
      <div class="container package-over py-5">

        <header class="text-center mb-5 text-white">
          <div class="row">
            <div class="col-lg-8 mx-auto ">
              <h1 style={{ color: 'black' ,  fontFamily: "Arial", fontWeight:'bolder',textShadow:'2px 2px 4px rgb(255,255,0,0.9)'}}>Best HomeCure  Service </h1>
              <p style={{ color: 'black' }}>Easily create a classy pricing table in Bootstrap 4.<br /> <a href="#" class="text-reset">Reactjs Bootstrap snippet by Jassa</a></p>
            </div>
          </div>
        </header>

        <div class="row text-center align-items-end">
 
          <div class="col-lg-4 mb-5 mb-lg-0"  >

        <div className='boxx'>
            <div class="bg-white p-5 rounded-lg shadow"   >
              <div style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'  }} >
                <h1 class="h6 text-uppercase font-weight-bold mb-4">STANDARD</h1>
              </div>
              <h2 class="h1 font-weight-bold">199Rs.<span class="text-small font-weight-normal ml-2">/ month</span></h2>
              <div class="custom-separator my-4 mx-auto bg-warning"></div>
              <ul class="list-unstyled my-5 text-small text-left">
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                <li class="mb-3 text-muted">
                  <i class="fa fa-times mr-2"></i>
                  <del>Nam libero tempore</del>
                </li>
                <li class="mb-3 text-muted">
                  <i class="fa fa-times mr-2"></i>
                  <del>Sed ut perspiciatis</del>
                </li>
                <li class="mb-3 text-muted">
                  <i class="fa fa-times mr-2"></i>
                  <del>Sed ut perspiciatis</del>
                </li>
              </ul>
              <a class="btn btn-warning btn-block p-2 shadow rounded-pill" onClick={() => { handleShow('STANDARD') }}>Subscribe</a>
            </div>
            </div>
          </div>

          <div class="col-lg-4 mb-5 mb-lg-0">
          <div className='boxx'>
            <div class="bg-white p-5 rounded-lg shadow">
              <div style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                <h1 class="h6 text-uppercase font-weight-bold mb-4">PREMIUM</h1>
              </div>
              <h2 class="h1 font-weight-bold">399Rs.<span class="text-small font-weight-normal ml-2">/ month</span></h2>
              <div class="custom-separator my-4 mx-auto bg-primary"></div>
              <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                <li class="mb-3 text-muted">
                  <i class="fa fa-times mr-2"></i>
                  <del>Sed ut perspiciatis</del>
                </li>
              </ul>
              <a class="btn btn-primary btn-block p-2 shadow rounded-pill" onClick={() => { handleShow('PREMIUM') }}>Subscribe</a>
            </div>
            </div>
          </div>

          <div class="col-lg-4">
          <div className='boxx'>
            <div class="bg-white p-5 rounded-lg shadow">
              <div style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }} >
                <h1 class="h6 text-uppercase font-weight-bold mb-4">DIAMOND</h1>
              </div>
              <h2 class="h1 font-weight-bold">899Rs.<span class="text-small font-weight-normal ml-2">/ month</span></h2>
              <div class="custom-separator my-4 mx-auto bg-warning"></div>
              <ul class="list-unstyled my-5 text-small text-left font-weight-normal">
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                <li class="mb-3">
                  <i class="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
              </ul>
              <a class="btn btn-warning btn-block p-2 shadow rounded-pill" onClick={() => { handleShow('DIAMOND') }}>Subscribe</a>
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    <ToastContainer />
  </div>


)
};

export default Home;
