import Image from "next/image";

export const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-0 py-8">
        <div className="relative bg-cover bg-center bg-no-repeat max-w-2xl w-full h-72 p-6 rounded-lg shadow-lg border border-earthy-brown">
          <Image
            src="/FarFromHome.gif"
            alt="Auto-running GIF"
            fill
            className="rounded-lg object-cover"
            unoptimized
          />
        </div>
      </div>
    </>
  );
};
