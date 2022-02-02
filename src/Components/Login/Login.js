import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';


const Login = () => {
   
    const {signInUsingGoogle}= useAuth();
    const location = useLocation();
    const history =useHistory();
    const redirect_uri=location.state?.from ||'/home';
    console.log(location.state?.from);

    const handleGoogleLogin =()=>{
    signInUsingGoogle()
    .then(result=>{
     history.push(redirect_uri);
    })
    }
    
    return (
        <div>
            <div>
                <h2 className="text-warning">Sign In</h2>
                <form onSubmit="">
                <input type="email" name="" id="" placeholder="your email" /><br />
                <br />
                <input type="password" name="" id=""  placeholder="your password"/><br />
                <br />
                <input type="submit" value="Submit" />
                </form>
                <p>If you are not Signup? <Link to="/signup">Create Account</Link></p>
                <div> Or Alternative way</div>
                <button onClick={handleGoogleLogin} className="bg-warning">Google Sign In</button>

            </div>
            <br /><br />
        </div>
    );
};

export default Login;