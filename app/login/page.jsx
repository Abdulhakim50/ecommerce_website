import LoginForm from "./LoginForm"
import {getCurrentUser} from "@/actions/getCurrentUser"

const login = async  ()=>{
   const currentUser= await getCurrentUser()
  
    return(
        
    <LoginForm currentUser={currentUser}/>
    )
}
export default login