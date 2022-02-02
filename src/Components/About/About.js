import React from 'react';
import solo from "../Images/aboutus.jpg";

const About = () => {
    return (
        <div>
            <h2 className="my-5">About us</h2>
            
            <div className="d-flex">
                <div className="mx-5">
                    <h4> <span className="text-danger ">Proud of</span> Family care at dental care</h4>
                    <h6>
                    Healthy smiles for healthy families start with professional family dentistry. At  Dental- care, your bright, healthy smile is our top priority. Of course, you'll only smile if you're as happy with our service as you are with our dental treatment. That's why we take the time to listen to your needs and concerns. Not only do we listen to your concerns, but we use gentle, efficient cleaning techniques. We also hire caring, highly trained professionals. Our experienced team of specialists is invested in meeting all of your dental needs; from calming anxieties to teaching good habits, from regular check-ups to sophisticated dental surgery
                    </h6>
                </div>
                <img src={solo} alt="" width="1000px"/>
            </div>
            <div>
                <h4>LeaRn more About us</h4>
                <a href="">dr.rafiq</a><br />
                <a href="">dr.jabbar</a><br />
                <a href="">dr.borkot</a><br />
                <h3>Your Teeth. Your Health. Your Appearance.</h3>
                <h6>They're all related and they all begin with excellent family dentistry. You and your family lead hectic lives, and you demand a lot from your teeth. Getting top performance means you have to give them top-quality care. Whether you just need a regular check-up, or more sophisticated dental treatment, Summercrest Dental will strive to understand your needs and surpass your expectations. We look forward to brightening your smile with the same attentive care, gentle technique, and conscientious service that we've given to thousands of satisfied visitor</h6>
            </div>
            


        </div>
    );
};

export default About;