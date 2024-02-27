// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from 'react';
import './Dashboard.css';
import { GetUserInfo } from '../../apicalls/users';
import { message } from 'antd';
import '../../stylesheets/alignment.css'
import { Link, useNavigate } from 'react-router-dom';
import { GetTransactionsofUser } from '../../apicalls/transactions';
import moment from 'moment'


const Dashboard = (()=>{
    const navigate = useNavigate()
    if(!localStorage.getItem('user')){
        navigate('/login')
    }
  
    
    const [userData,setUserData] = useState("")

    const logout = () => {
        localStorage.removeItem('user');
        window.location.href='/login';
      };

    const getData = async ()=>{
        try{
            const payload = {
                user_id: localStorage.getItem('user')
            }
            const response = await GetUserInfo(payload)
            if (response.success){
                setUserData(response.data)
            }
        } catch(error){
            message.error(error.message)
        }
    }

    const [data=[],setData] = useState([])

    const getTransaction = async ()=>{
        try{
            const payload = {
                user_id: localStorage.getItem('user')
            }
            const response = await GetTransactionsofUser(payload)
            if(response.success){
                setData(response.data)
            }
        } catch(error){
            message.error(error.message)
        }
    }

    useEffect(()=>{
        getData(),
        getTransaction()
    },[])


    
    return (
        <div className='dash-main'>
        
            <div className='dash-header'>
                
                <div className='profile-details'>
                    <div className='allDetails'>Hi {userData.username}</div>
                    <div className='allDetails'><h1>Welcome to Wallet</h1></div>
                    <div className='flex justify-between'>
                        <button className='p-1 w-25 ' ><Link to="/Deposit">Deposit</Link></button>
                        <button className='p-1 w-25 ' ><Link to ="/Withdraw">Withdraw</Link></button>
                        <button className='p-1 w-25 ' ><Link to="/Transfer">Transfer</Link></button>
                        <button className='p-1 w-25 ' onClick={logout}>Logout</button>
                    </div>
                </div>
                
            </div>
            <div className='dash-table'>
            <div className='table-div'>
                <div className='p-2 mt-2'>
                    <div className='bg-tertiary p-05 text-white flex justify-between'>
                        <h3> Acount Id </h3>
                        <h3>{userData._id}</h3>
                    </div>
                    <div className=' bg-tertiary p-05 text-white flex justify-between'>
                        <h3>Balance </h3> 
                        <h3>$ {userData.balance}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <h3>User Name </h3> 
                        <h3>{userData.username}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <h3>Contact </h3> 
                        <h3>{userData.phone}</h3>
                    </div>
                    <div className='flex justify-between'>
                        <h3>Email </h3> 
                        <h3>{userData.email}</h3>
                    </div>
                        
                </div> 
                <div className='m-1'>
                   <center><h2 className='item-center'>TRANSACTIONS</h2></center> 
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Transaction ID</th>
                            <th>Amount</th>
                            <th>Type of Transaction</th>
                            <th>Reference Account</th>
                            <th>Status</th>
                        </tr>
                        
                        {data.map((row)=>{
                            return(
                                <>
                                <tr key={row._id}>
                                    <td >{moment(row.createdAt).format("DD/MM/YYYY hh:mm:ss A")}</td>
                                    <td>{row._id}</td>
                                    <td>{row.amount}</td>
                                    <td>{row.sender._id === row.receiver._id ? row.type : localStorage.getItem('user') ===row.sender._id ? "Debit" : "Credit" }</td>
                                    <td>{localStorage.getItem('user') === row.sender._id ? row.receiver.username : row.sender.username}</td>
                                    <td>{row.status}</td>
                                </tr>
                                </>
                            
                                )
                        })}
                        
                        
                        
                    </table>
                </div>
            </div>
            </div>
        </div>
        
    );
})

export default Dashboard;