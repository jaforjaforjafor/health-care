import React from 'react';

const Request = () => {
    return (
        <div>
            <h2 className="text-info">Request An Appointment</h2>
            <p>Please fill out the form below and we will contact you with an appointment time. Required fields are marked with asterisks</p>
            <h2 className="text-success">Patient Information</h2>
            <form onSubmit="">
                <input type="text" name="" id="" placeholder="First name" /><br />
                <br />
                <input type="text" name="" id="" placeholder="Last name" /><br />
                <br />
                <input type="email" name="" id="" placeholder="your email" /><br />
                <br />

               <p> Have you visited our office before? </p><input type="radio" name="size" id="yes"/> <label htmlFor="">yes</label> <input type="radio" name="size" id="no"/> <label htmlFor="">No</label><br /><br /><br /><br />
            
               <div>
               <p> What is the reason  for appoinment? </p><input type="radio" name="size" id="yes"/> <label htmlFor="">Regular Exam</label> <input type="radio" name="size" id="no"/> <label htmlFor="">Cleaning</label><br /><br />
               </div>
                <input type="submit" value="Submit" />
                </form>
<br /><br /><br />
        </div>
    );
};

export default Request;