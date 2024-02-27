import { useState } from "react";
import {  Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { message } from "antd";
import { LoginUser } from "../../apicalls/users";

function Sigin(){
    const navigate = useNavigate()
    if(localStorage.getItem('user')){
        localStorage.removeItem('user');
    }
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        const data = {
            email : email,
            password: password,
        }
        try{
            const response = await LoginUser(data)
            if(response.success){
                message.success(response.message)
               
                localStorage.setItem('user', response.data);
                navigate("/Home")
                
            }else{
                message.error(response.message)
            }
        } catch(error){
            message.error(error.message)
        }
    };

    


    
    return(
        <>
            <div className="app">
            <form className="login-form" onSubmit={(e)=>{handleSubmit(e)}}>
                <h1>Login</h1>
                <input type="email"  name="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            
                <input type="password"  name="password" placeholder="Password" value={password} onChange={(e=>{setPassword(e.target.value)})}/>
            
            
                <button type="submit" className="submit__btn" >Login</button>
                <br></br>
                <h3 className="">
                    Not a memeber, <Link to="/Register">Register</Link>
                </h3>
            </form>

            
        </div>
        </>);
}

export default Sigin;