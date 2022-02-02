import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Signup = () => {
    const {user, signInUsingGoogle}= useAuth();
    return (
        <div>
              <div>
                <h2 className="text-primary">SIGN UP</h2>
                <form onSubmit="">
                <input type="text" name="" id="" placeholder="First name" /><br />
                <br />
                <input type="text" name="" id="" placeholder="Last name" /><br />
                <br />
                <input type="email" name="" id="" placeholder="your email" /><br />
                <br />
                <input type="password" name="" id=""  placeholder="your password"/><br />
                <br />
                <input type="password" name="" id=""  placeholder="confirm password"/><br />
                <br />
                <input type="submit" value="Submit" />
                </form>
                <p>Already Sign up? <Link to="/login">please login</Link></p>
                <div> Or Alternative way</div>
                <button onClick={signInUsingGoogle} className="bg-warning">Google Sign In</button>
                
                

            </div>
        </div>
    );
};

export default Signup;