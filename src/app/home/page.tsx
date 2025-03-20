"use client"
import {signIn, signOut, useSession} from "next-auth/react"
import Image from "next/image"
//importing image component
const Home = () => {
  //session hook session ma je cha tyo tannaye
const {data:session}=useSession() //jaile ni data vanney mai ako huncha select * from users
  if(session){
    return( 
      <>
      <Image src={session.user?.image || "next.svg"} alt={"my pp"} height={50} width={50} />
      <h1>Welcome,{session.user?.name}</h1>
      <h1>{session.user?.email}</h1>
      <button onClick={()=>signOut()}>Sign Out</button>
      </>
    )
  }

return (
 <>
 <h1>Not logged In</h1>
 <button onClick={()=>signIn("google")}>Sign in with google</button>
 </>
  )
}

export default Home