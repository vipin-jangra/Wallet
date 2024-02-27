import axios from "axios";


export const VerifyAccount = async (payload) =>{
    try{
            const {data} = await axios.post("http://localhost:3000/api/transactions/verify-account",payload)
            return data
    } catch(error){
        console.log('Error in verify account: ', error.response.data);
    }
}

export const TransferFund = async(payload) =>{
    try{
        const {data} = await axios.post("http://localhost:3000/api/transactions/transfer-fund",payload)
        return data
    } catch(error){
        console.log('Error in transfering funds', error.response.data);
    }
}

//get all transactions for a user
export const GetTransactionsofUser = async (payload)=>{
    try{
        const {data} = await axios.post("http://localhost:3000/api/transactions/get-all-transactions-by-user",payload)
        return data
    } catch (error){
        return error.response.data
    }
}

export const DepositFunds = async (payload)=>{
    try{
        const {data} = await axios.post("http://localhost:3000/api/transactions/deposit-fund", payload)
        return data
    } catch (error){
        return error.response.data
    }
}

export const WithdrawFunds = async (payload)=>{
    try{
        const {data} = await axios.post("http://localhost:3000/api/transactions/withdraw-fund", payload)
        return data
    } catch (error){
        return error.response.data
    }
}

