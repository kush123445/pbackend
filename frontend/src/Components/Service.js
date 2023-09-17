
import '../App.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Service.css';
import Swal from 'sweetalert2';
import React, { useState } from 'react';


const Service = () => {


        const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
        });
    

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
              ...prevData,
              [name]: value,
            }));
          };


          const handleSubmit = (e) => {
            e.preventDefault();
            // You can handle form submission here, e.g., send data to server, etc.
            console.log(formData);
            // Close the SweetAlert modal after form submission
            Swal.fire('Success', 'Form submitted!', 'success').then(() => {
              // Reset the form data after successful submission
              setFormData({
                name: '',
                email: '',
                message: '',
              });
            });
          };

          const openModal = () => {
            Swal.fire({
              title: 'Contact Form',
              html: (
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
              ),
              showCancelButton: true,
              showConfirmButton: false,
              cancelButtonText: 'Close',
            });
          };
        
  return (
 <>
 <button onClick={openModal} style={{color:'red'}}>Open Modal</button>
     <div class="container">
    <div class="column">
      <div class="pricing-card basic">
        <div class="pricing-header">
          <span class="plan-title">BASIC PLAN</span>
          <div class="price-circle">
            <span class="price-title">
              <small>$</small><span>6.95</span>
            </span>
            <span class="info">/ Month</span>
          </div>
        </div>
        <div class="badge-box">
          <span>Save 35%</span>
        </div>
        <ul>
          <li>
            <strong>1</strong> Domain
          </li>
          <li>
            <strong>10 GB</strong> Disk Space
          </li>
          <li>
            <strong>50 GB</strong> Bandwith
          </li>
          <li>
            <strong>1 Free</strong> Domain
          </li>
          <li>
            <strong>1 FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
          <a href="#" class="buy-now">BUY NOW</a>
        </div>        
      </div>
    </div>
    <div class="column">
      <div class="pricing-card echo">
        <div class="pricing-header">
          <span class="plan-title">ECHO PLAN</span>
          <div class="price-circle">
            <span class="price-title">
              <small>$</small><span>16.95</span>
            </span>
            <span class="info">/ Month</span>
          </div>
        </div>
        <div class="badge-box">
          <span>Save 15%</span>
        </div>
        <ul>
          <li>
            <strong>5</strong> Domains
          </li>
          <li>
            <strong>50 GB</strong> Disk Space
          </li>
          <li>
            <strong>250 GB</strong> Bandwith
          </li>
          <li>
            <strong>2 Free</strong> Domains
          </li>
          <li>
            <strong>Unlimited FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
          <a href="#" class="buy-now">BUY NOW</a>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="pricing-card pro">
        <div class="popular">POPULAR</div>
        <div class="pricing-header">
          <span class="plan-title">PRO PLAN</span>
          <div class="price-circle">
            <span class="price-title">
              <small>$</small><span>23.95</span>
            </span>
            <span class="info">/ Month</span>
          </div>
        </div>
        <div class="badge-box">
          <span>Save 8%</span>
        </div>
        <ul>
          <li>
            <strong>10</strong> Domains
          </li>
          <li>
            <strong>100 GB</strong> Disk Space
          </li>
          <li>
            <strong>Unlimited</strong> Bandwith
          </li>
          <li>
            <strong>3 Free</strong> Domains
          </li>
          <li>
            <strong>Unlimited FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
          <a href="#" class="buy-now">BUY NOW</a>
        </div>
      </div>
    </div>
    <div class="column">
      <div class="pricing-card business">
        <div class="pricing-header">
          <span class="plan-title">BUSINESS PLAN</span>
          <div class="price-circle">
            <span class="price-title">
              <small>$</small><span>59.95</span>
            </span>
            <span class="info">/ Month</span>
          </div>
        </div>
        <div class="badge-box">
          <span>Save 5%</span>
        </div>
        <ul>
          <li>
            <strong>Unlimited</strong> Domain
          </li>
          <li>
            <strong>250 GB</strong> Disk Space
          </li>
          <li>
            <strong>Unlimited</strong> Bandwith
          </li>
          <li>
            <strong>5 Free</strong> Domains
          </li>
          <li>
            <strong>Unlimited FTP</strong> Account
          </li>
        </ul>
        <div class="buy-button-box">
          <a href="#" class="buy-now">BUY NOW</a>
        </div>
      </div>
    </div>
  </div>
 </>
  );
};

export default Service;
