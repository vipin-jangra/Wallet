
import { useState } from "react";
import { message } from "antd";
import { Link } from "react-router-dom";
import { DepositFunds } from "../apicalls/transactions";
function Deposit(){
    if(!localStorage.getItem('user')){
        window.location.href ='/login'
    }
    const [amount,setAmount] = useState("")
    const user_id = localStorage.getItem('user')
    const handler = async ()=>{
        try{
            const payload = {
                sender:user_id,
                receiver : user_id,
                amount: parseFloat(amount),
                type : "Credit",
                reference: "Deposit",
                status: "success"
            }

            const response = await DepositFunds(payload)
            if(response.success){
                window.location.href = '/Home'
                message.success(response.message)
            }else{
                message.error(response.message)
            }
        } catch(error){
                message.error(error.message)
        }
    }

    return (
        <>
            <div className="app">
            <form className="login-form" >
                <h1>Deposit Funds</h1>
                <input type="number"  name="amount" placeholder="Amount" value={amount} onChange={(e=>{setAmount(e.target.value)})}/>
                
                <button type="button" className="submit__btn" onClick={() => handler()}  >Deposit</button>
                <button type="button" className="submit__btn" ><Link to="/Home">Cancel</Link></button>
                
            </form>

            
        </div>
        </>
    )
}

export default Deposit