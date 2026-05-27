
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaRegStickyNote, FaTrash, FaPowerOff } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoPerson } from "react-icons/io5";

export default  function Dashboard(){
  const {data:session} = useSession()
  if(!session){
    redirect('/login')
  }
    return(
          <div className="min-h-screen ">

      {/* Navbar */}
      <div className="flex items-center justify-between px-12 py-4">

        <div className="flex items-center gap-2 text-blue-300">
          <FaRegStickyNote />
          <h1 className="text-sm">Notely</h1>
        </div>

        <div className="flex items-center gap-4 text-blue-300">

          <div className="flex items-center gap-1">
            <IoPerson className="text-sm" />
            <p className="text-sm">{session?.user?.name}</p>
          </div>

          <FaPowerOff className="cursor-pointer" />

        </div>
      </div>

      {/* Notes Section */}
      <div className="bg-gray-100 mx-12 p-4 min-h-72">

        <h1 className="text-4xl text-blue-600 mb-6">
          My Notes
        </h1>

        <div className="flex gap-4 flex-wrap">

          {/* Note Card */}
          <div className="bg-pink-300 w-32 rounded-md p-3 shadow">

            <div className="flex items-start justify-between">

              <h1 className="text-sm font-medium">
                title
              </h1>

              <Link href={'/notes/1'} ><FiEdit className="text-sm cursor-pointer" /></Link>

            </div>

            <p className="text-xs mt-3">
              description
            </p>

            <div className="flex items-center justify-between mt-5">

              <p className="text-[10px] text-gray-500">
                23/5/26
              </p>

              <FaTrash className="text-red-500 text-xs cursor-pointer" />

            </div>

          </div>

          {/* Add New Note */}
          <div className="border border-dashed border-gray-500 w-32 h-32 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100">

            <FiEdit className="text-sm mb-1" />

            <Link href={'/notes/add'} className="text-xs">
              New Note
            </Link>

          </div>

        </div>

      </div>

    </div>
    )
}