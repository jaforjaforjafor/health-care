import React from 'react';
import './Home.css';
import  logo from"../Images/pic2.jpg";
import  pogo from"../Images/home2.jpg";
import  nogo from"../Images/home3.jpg";
import  ogo from"../Images/home4.jpg";



const Home = () => {
    return (
        <div >
            <div className="d-flex">
                <div className="mx-5">
                <h1 className="text-success">We Care About Teeth.Good smile gives u freshness </h1>
            <p className="text-primary">Care about Your teeth,Dentist suggest people  has to be clean their teeth 2 times regularly.if you need any kind of advise please tell us  cause our specialist doctor now also in online .</p> 
                </div>
                <img src={logo} alt=""height="350px" />
            </div>
            <div className="container">
            <h1 className='text-center my-5'>OUR  Features</h1>
  <div className="row">
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={pogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">patient dependencies</h5>
    <p className="card-text">Advice patient how to protect your teeth.life is happy if your health is well</p>
    <a hRef="" className="btn btn-primary">see update</a>
    
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={nogo} alt="" height="250px"/>
  <div className="card-body">
    <h5 className="card-title">operation time</h5>
    <p className="card-text">Patients think about teeth ,we think about patient.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div> </div>
    <div className="col-sm"> <div className="card">
  <img className="card-img-top" src={ogo} alt=""  height="250px"/>
  <div className="card-body">
    <h5 className="card-title">Succesful operation</h5>
    <p className="card-text"> after Succesful dentist activity the child smile like he is true happiest person.</p>
    <a hRef="" className="btn btn-primary">see update</a>
  </div>
</div></div>
  </div>
</div>
                
            
            
            
            
           <br /><br /><br />
           
          
            
        </div>

       
       
        
    );
};

export default Home;