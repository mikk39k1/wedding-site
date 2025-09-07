import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fffefa]">
      <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-4xl font-light text-center">LISE & MIKKEL</h1>
      {/* <div className="w-[110%] border-b border-gray-200 pb-1" /> */}
      <h2 className="text-2xl text-center">Bryllupsfest</h2>
      </div>
      <p className="text-center text-small mb-8">Mere info kommer snart</p>
      <Image src="/images/bryllupsblomst.jpg" width={300} height={300} alt="Bryllupsblomst" />
    </div>
  );
}
