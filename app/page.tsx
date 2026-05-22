import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="min-h-screen flex  md:grid grid-cols-2 justify-center items-center w-full  ">
    <div className=" ml-8 ">
      <h1 className="text-blue-500 text-4xl font-black">Notely</h1>
      <h2 className="text-blue-400 text-2xl ">The Note-Taking App That Thinks the Way You Do</h2>
      <p className="">Capture ideas, organize tasks, and sync across devices instantly. No clutter. Just your thoughts.</p>
      <Link href={'/login'} className="bg-blue-600 text-white px-3 py-1 mt-1 rounded ">Let's Start</Link>
    </div>
    <div>
      <Image width={400} height={400} src={"/landing.png"} className="m-4" alt= "landing" />
    </div>
     </div>
  );
}
