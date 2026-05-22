import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";


export default function add(){
    return(
        <div className="min-h-screen  flex items-center justify-center">

      {/* Modal Box */}
      <div className="bg-white w-87.5 border border-gray-300 p-4">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div>
            <h1 className="text-blue-500 text-2xl font-bold">
              Notely
            </h1>

            <p className="text-gray-500 text-sm">
              Add Notes
            </p>
          </div>

          

        </div>

        {/* Close Icon */}
        <div className="flex justify-between">
            <FaTimes className="mt-5 text-xl cursor-pointer" />
             <button className="bg-red-400 text-white text-xl px-2 py-1 rounded-full flex items-center gap-1 hover:bg-red-500">
            Save
            <TiTick/>
          </button>
        </div>
        {/* Form */}
        <form className="mt-6 flex flex-col gap-5">

          <input
            type="text"
            placeholder="Title"
            className="outline-none  placeholder-gray-500 bg-gray-200 p-3 rounded"
          />

          <textarea
            placeholder="Description"
            rows={5}
             className="outline-none  placeholder-gray-500 bg-gray-200 p-3 rounded"
          ></textarea>

        </form>

      </div>

    </div>
  );
}

  