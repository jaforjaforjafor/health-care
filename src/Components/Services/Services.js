import React from 'react';
import "./Services.css"
import  logo from'../Images/pic-6.jpg';
import  pogo from '../Images/pic-7.jpg';
import  mogo from '../Images/pic-5.jpg';
import  aogo from '../Images/home2.jpg';
import  bogo from '../Images/home3.jpg';
import  cogo from '../Images/home4.jpg';


const Services = () => {
    return (
      
        <div className="container">
            <h1 className='text-center my-5'>OUR  BEST SERVICES</h1>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={logo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">patient dependencies</h5>
    <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
    <a hRef="" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={pogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">operation time</h5>
    <p className="card-text">Patients think about teeth ,we think about patient.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={mogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Succesful operation</h5>
    <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={aogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">patient dependencies</h5>
    <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
    <a hRef="" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={bogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">operation time</h5>
    <p className="card-text">Patients think about teeth ,we think about patient.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={cogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Succesful operation</h5>
    <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div><br /><br />
</div>
    );
};

export default Services;