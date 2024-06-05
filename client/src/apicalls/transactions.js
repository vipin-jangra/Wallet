import axios from "axios";


export const VerifyAccount = async (payload) =>{
    try{
            const {data} = await axios.post("https://wallet-backend-pbma.onrender.com/api/transactions/verify-account",payload)
            return data
    } catch(error){
        console.log('Error in verify account: ', error.response.data);
    }
}

export const TransferFund = async(payload) =>{
    try{
        const {data} = await axios.post("https://wallet-backend-pbma.onrender.com/api/transactions/transfer-fund",payload)
        return data
    } catch(error){
        console.log('Error in transfering funds', error.response.data);
    }
}

//get all transactions for a user
export const GetTransactionsofUser = async (payload)=>{
    try{
        const {data} = await axios.post("https://wallet-backend-pbma.onrender.com/api/transactions/get-all-transactions-by-user",payload)
        return data
    } catch (error){
        return error.response.data
    }
}

export const DepositFunds = async (payload)=>{
    try{
        const {data} = await axios.post("https://wallet-backend-pbma.onrender.com/api/transactions/deposit-fund", payload)
        return data
    } catch (error){
        return error.response.data
    }
}

export const WithdrawFunds = async (payload)=>{
    try{
        const {data} = await axios.post("https://wallet-backend-pbma.onrender.com/api/transactions/withdraw-fund", payload)
        return data
    } catch (error){
        return error.response.data
    }
}

