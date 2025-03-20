"use client"
import { SessionProvider } from "next-auth/react"


//creating component session wrapper , it is taking children as prop 
//it is returing session provider
const SessionWrapper=({children}:{children:React.ReactNode})=>{
return(
    
    <SessionProvider>{children}</SessionProvider>

)
}
export default SessionWrapper