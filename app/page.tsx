import Image from "next/image";

export default function Home() {
  return (
   <div className="min-h-screen flex justify-center items-center w-full ">
    <div className=" md:grid grid-cols-2 ">
      <h1 className="text-blue-500 text-4xl font-black">Notely</h1>
      <h2 className="text-blue-400 text-2xl p-2">The Note-Taking App That Thinks the Way You Do</h2>
      <p className="">Capture ideas, organize tasks, and sync across devices instantly. No clutter. Just your thoughts.</p>
    </div>
    <div>
      <Image width={600} height={600} src={"/landing.png"} alt= "landing" />
    </div>
     </div>
  );
}
