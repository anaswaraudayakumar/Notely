"use client"

import { signIn } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"
import toast from "react-hot-toast"



export default function login() {
  const [userDetails, setUserDetails] = useState({
    email: "", password: ""
  })
  const handleLogin = async (e: any) => {
    e.preventDefault()
    const { email, password } = userDetails
    if (!email || !password) {
      toast.error("Please fill the form completely")
    } else {
      const res = await signIn("credentials", {
        email, password, redirect: false
      })
      if (res?.ok) {
        toast.success("Login SuccessFull")

        window.location.href = "/notes"

      } else {
        toast.error("Invalid Credentials")
        setUserDetails({ email: "", password: "" })
      }
    }

  }
  return (

    <div className="w-full h-screen flex items-center justify-center">

      <div className="bg-blue-500 w-72 p-4 rounded-sm shadow-lg">

        <h1 className="text-white text-2xl font-bold">
          Notely
        </h1>

        <p className="text-white text-sm mb-4">
          Note Taking made easier!
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-3">

          <input value={userDetails.email} onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
            type="email"
            placeholder="Email"
            className="bg-gray-200 p-2 rounded outline-none text-sm"
          />

          <input
            type="password"
            value={userDetails.password}
            onChange={e => setUserDetails({ ...userDetails, password: e.target.value })}
            placeholder="Password"
            className="bg-gray-200 p-2 rounded outline-none text-sm"
          />

          <div className="flex items-center gap-3">

            <button type="submit" className="bg-blue-800 text-white px-4 py-1 rounded text-sm hover:bg-blue-900">
              Login
            </button>

            <div className="flex col-span-2">
              <p className="text-[10px] text-white">
                New User ?
              </p>
              <Link className="text-[10px] text-white" href={'/register'}>Click here to <span className="text-blue-900 outline-blue-900">Regiter</span></Link>



            </div>

          </div>

        </form>

      </div>

    </div>
  )
}