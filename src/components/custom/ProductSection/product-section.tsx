import { data } from "@/lib/data/data";
import Image from "next/image";

export const ProductSection = () => {
  return (
    <div className="py-14 bg-green-50">
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl px-4 mx-auto">
          {data.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-green-200"
            >
              <div className="h-40 w-full bg-green-100 flex items-center justify-center rounded-md mb-4 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <h2 className="text-xl font-semibold text-green-800">
                {product.name}
              </h2>
              <p className="text-green-600 mb-2">Price: {product.price}</p>
              <p className="text-green-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
