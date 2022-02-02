import React from 'react';
import kogo from "../Images/testomonials.jpg"

const Testmonial = () => {
    return (
        
        <div >
             <h2> Patient Testimonials </h2>

<div className='d-flex'>

<div className="mx-5">
<p>My name is mathew and I go to Dr. Marrero at nayapaltan Dental-care. There was a time when I stopped smiling and started to cover up my front teeth when I spoke. Eventually the day before my 33rd birthday one of my front teeth broke, and I was devastated! I called the office at 8pm, and talked to the doctor. He told me not to worry and they got me in the next morning. They not only fixed my broken tooth but fixed 7 more fillings in the front. It was BEST birthday present I have ever received... Dr. Marrero and everybody there at Summercrest Dental changed my life and I am back to smiling and feeling good about myself again. Thank You SO much!!!
<h5>~ mathew.</h5>

Dr. Marrero and his staff are wonderful! The office is relaxing and they take care to make sure their patients are comfortable.
~ Nancy P.</p><br />
<p>He did a great job repairing broken fillings. Great with pain management and has a relaxing demeanor. Thanks for the great work!
~ synetrics</p><br /><br />
</div>

<img src={kogo} alt=""height="450px" />
</div>
        <br /><br /><br />   
        </div>
    );
};

export default Testmonial;