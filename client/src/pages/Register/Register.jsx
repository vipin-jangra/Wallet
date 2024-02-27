import { useState } from "react";
import {  Link, useNavigate } from 'react-router-dom'
import './Register.css';
import { RegisterUser } from "../../apicalls/users";
import {message} from 'antd'

function Register(){
    const navigate = useNavigate()
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [firstname,setFirstName] = useState("")
    const [phone,setPhone] = useState("")
    const [cnfrmPassword,setCnfrmPassword] = useState("")
    
    
    
    const handleSubmit = async(e) =>{
        e.preventDefault();
        
        const data = {
            email : email,
            password: password,
            username : firstname,
            phone : phone,
        }
        try{
            const response = await RegisterUser(data)
            if(response.success){
                message.success(response.message)
                navigate("/login")
            }
        } catch(error){
            message.error(error.message)
        }
    };


    
    return(
        <>
            <div className="app">
            <form className="login-form" onSubmit={(e)=>{handleSubmit(e)}}>
                <h1>REGISTER</h1>
                <input type="text"  name="firstname" id="" placeholder="FirstName" value={firstname} onChange={(e)=>{setFirstName(e.target.value)}}/>
                <input type="email"  name="email" id="" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="phone"  name="phone" id="" placeholder="Phone" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                
                <input type="password"  name="password" placeholder="Password" id="" value={password} onChange={(e=>{setPassword(e.target.value)})}/>
                <input type="password"  name="cnfrmPassword" placeholder="Confirm Password" id="" value={cnfrmPassword} onChange={(e=>{setCnfrmPassword(e.target.value)})}/>
            
                <button type="submit" className="submit__btn" >Submit</button>
                <h3 className="">
                    Already a memeber, <Link to="/">Sigin</Link>
                </h3>
            </form>

            
        </div>
        </>);
}

export default Register;