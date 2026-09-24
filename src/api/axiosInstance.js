import axios from "axios";


const axiosInstance= axios.create({
    baseURL:" https://rb-server-du3z.onrender.com",
    timeout: 5000,
})

axios.interceptors.response.use(
    (response)=>{
        console.log("Response Received");
        return response
    },
    (error)=>{
        if(error.response){
            const status = error.response.status
            if(status==401){
                console.log("Unauthorised Access - Redirect to Login page" );
            }
           else if(status==404){
                console.log("API is not found" );
            }
           else if(status==500){
                console.log("Something went Wrong.... Try again later" );
            }
           else if(error.request){
                console.log("No responce from the server" );
            }
            else {
                console.log("")
                
            }
            return Promise.reject(error)
        }
    }
)

export default axiosInstance
