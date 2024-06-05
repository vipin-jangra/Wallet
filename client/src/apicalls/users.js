import axios from 'axios'

export const LoginUser = async (payload) =>{
    try{

        const {data}  = await axios.post('http://localhost:3000/api/users/login', payload);
         return data;
    }catch(error){  
        error.response.data
    }
}

export const RegisterUser = async (payload) =>{
    try{
        const {data}  = await axios.post('http://localhost:3000/api/users/register', payload);
         return data;
    }catch(error){  
        error.response.data
    }
}

export const GetUserInfo = async() =>{
    try{
        const {data} = await axios.post('http://localhost:3000/api/users/get-user-info')
        return data
    } catch(error){
        return error.response.data
    }
}
