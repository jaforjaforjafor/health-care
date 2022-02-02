import React from 'react';
import logo from '../Images/pic9.jpg';
import './Contact.css'

const Contactus = () => {
    return (
        <div>
            <h2 className="text-danger my-5"> Contact us</h2><br />
            <h3>Our details You can contact us by phone or on social media – whatever works for you. Just pick from the options below:</h3>
            <div>
                <img src={logo} alt="" />
            </div>

<p>Phone: 0333 014 6683</p>
<h5>Opening hours:
  <h4>Mon 09.00am - 05.30pm</h4><br />
  <h4>Tues 09.00am - 05.30pm</h4><br />
  <h4>wed 09.00am - 05.30pm</h4><br />
  <h4>thurs 09.00am - 05.30pm</h4><br />
  <h4>fri 09.00am - 05.30pm</h4><br />
  <h4>Sat 09.00am - 02.30pm</h4><br />
  <h4>Sun closed</h4><br />
  <h6>Calling about a claim? We're here 24/7, all year round on: 000022222000 Social: You can catch us on Twitter or Facebook, or find your favourite platform on our social homepage.</h6>
  <h4>Email us: <a className="email" href="">dentalcare365@gmail.com</a></h4>




.</h5>

        </div>
    );
};

export default Contactus;