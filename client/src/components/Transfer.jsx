import { useState } from "react";
import { TransferFund, VerifyAccount } from "../apicalls/transactions";
import { message } from "antd";
import { Link } from "react-router-dom";
function Trasnfer(){
    if(!localStorage.getItem('user')){
        window.location.href ='/login'
    }
    const [accountNumber,setAccountNumber] = useState("");
    const [amount,setAmount] = useState("")
    const [reference,setReference] = useState("")
    const user_id = localStorage.getItem('user')
    const handler = async ()=>{
        try{
            const payload = {
                sender:user_id,
                receiver : accountNumber,
                amount: parseFloat(amount),
                reference: reference,
                type : "Debit",
                status: "success"
            }

            const response = await TransferFund(payload)
            if(response.success){
                window.location.href = '/Home'
                message.success(response.message)
            }else{
                message.error(response.message)
            }
        } catch (error){
                message.error(error.message)
        }
    }

    const verifyAccount =  async ()=>{
        try{
            const response = await VerifyAccount({
                receiver : accountNumber,
            })
            if(response.success){
                
                message.success(response.message)
            }else{
                
                message.error(response.message)
            }
        } catch (error){
            
            message.error(error.message)
        }
    } 

    return (<>
       <div className="app">
            <form className="login-form" >
                <h1>Transfer Funds</h1>
                <input type="text"  name="accountNumber" placeholder="Account Number" value={accountNumber} onChange={(e)=>{setAccountNumber(e.target.value)}}/>
                <button type="button" className="submit__btn" onClick={verifyAccount} >Veriy</button>
                <input type="number"  name="amount" placeholder="Amount" value={amount} onChange={(e=>{setAmount(e.target.value)})}/>
                <input type = "text" name="reference" placeholder="Reference" value={reference} onChange={(e=>{setReference(e.target.value)})}  />
            
                <button type="button" className="submit__btn" onClick={() => handler()}  >Transfer</button>
                <button type="button" className="submit__btn" ><Link to="/Home">Cancel</Link></button>
                
            </form>

            
        </div>
    </>)
}

export default Trasnfer