import Link from "next/link"


export default function login(){
    return(
        
        <div className="w-full h-screen flex items-center justify-center">
  
  <div className="bg-blue-500 w-72 p-4 rounded-sm shadow-lg">
    
    <h1 className="text-white text-2xl font-bold">
      Notely
    </h1>

    <p className="text-white text-sm mb-4">
      Note Taking made easier!
    </p>

    <form className="flex flex-col gap-3">

      <input
        type="email"
        placeholder="Email"
        className="bg-gray-200 p-2 rounded outline-none text-sm"
      />

      <input
        type="password"
        placeholder="Password"
        className="bg-gray-200 p-2 rounded outline-none text-sm"
      />

      <div className="flex items-center gap-3">

        <button className="bg-blue-800 text-white px-4 py-1 rounded text-sm hover:bg-blue-900">
          Login
        </button>

       <div className="flex col-span-2">
            <p className="text-[10px] text-white">
              New User ?   
            </p>
            <Link className="text-[10px] text-white"  href={'/register'}>Click here to <span className="text-blue-900 outline-blue-900">Regiter</span></Link>
            
            
            
       </div>

      </div>

    </form>

  </div>

</div>
    )
}