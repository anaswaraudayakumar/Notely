"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"


export default function Register(){
  const router = useRouter()
  const [userDetails,setUserDetails] = useState({
    name:"",email:"",password:""
  })

  const handleRegister = async (e:any)=>{
    e.preventDefault()
    const {name,email,password} = userDetails
    if(!name || !email || !password){
      toast.error("Please fill the form completely")
    }else{
      const res = await fetch('/api/register',{
        method:"POST",
        body:JSON.stringify(userDetails)
      })
      console.log(res)
      const serverResponse = await res.json()
      if(res.status==201){
        toast.success(serverResponse.message)
        setTimeout(()=>{
          router.push('/login')
        },2000)
      }else{
        toast.error(serverResponse.message)
      }
      setUserDetails({name:"", email:"",password:""})
    }
  }
    return(
         <div className="w-full h-screen flex items-center justify-center">
  
  <div className="bg-blue-500 w-72 p-4 rounded-sm shadow-lg">
    
    <h1 className="text-white text-2xl font-bold">
      Notely
    </h1>

    <p className="text-white text-sm mb-4">
      Note Taking made easier!
    </p>

    <form onSubmit={handleRegister} className="flex flex-col gap-3">
      <input
        type="text"
        onChange={e=>setUserDetails({...userDetails,name:e.target.value})}
        placeholder="Name"
        className="bg-gray-200 p-2 rounded outline-none text-sm"
      />
      <input
        type="email"
        onChange={e=>setUserDetails({...userDetails,email:e.target.value})}
        placeholder="Email"
        className="bg-gray-200 p-2 rounded outline-none text-sm"
      />

      <input
        type="password"
        onChange={e=>setUserDetails({...userDetails,password:e.target.value})}
        placeholder="Password"
        className="bg-gray-200 p-2 rounded outline-none text-sm"
      />

      <div className="flex items-center gap-3">

        <button type="submit" className="bg-blue-800 text-white px-4 py-1 rounded text-sm hover:bg-blue-900">
          Register
        </button>

       <div className="flex col-span-2">
            <p className="text-[10px] text-white">
              Alredy a user  ?   
            </p>
            <Link className="text-[10px] text-white"  href={'/login'}>Click here to <span className="text-blue-900 outline-blue-900">Login</span></Link>
            
            
            
       </div>

      </div>

    </form>

  </div>

</div>
    )
}