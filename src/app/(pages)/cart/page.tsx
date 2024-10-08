

'use client'
import { useState, useEffect } from "react";
import { iProduct } from "@/lib/data/data";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
    const [cart, setCart] = useState<iProduct[]>([]);

    // Load cart from localStorage when the component is mounted
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Remove product from cart
    const removeFromCart = (productToRemove: iProduct) => {
        const updatedCart = cart.filter(product => product.name !== productToRemove.name);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Update localStorage
    };

    const totalItems = cart.length;

    return (
        <section className="min-h-screen w-screen px-4 md:px-12 mt-0 bg-green-50">
            <h1 className="mb-8 text-3xl font-semibold text-green-800">Your Cart</h1>

            {/* Buyer button to go back to the buyer page */}
            <div className="mb-6">
                <Link href="/buyer">
                    <button className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors">
                        Buyer
                    </button>
                </Link>
            </div>

            {totalItems === 0 ? (
                <p className="text-lg">
                    Your cart is empty. <Link href="/buyer" className="text-green-600 hover:underline">Go back to products</Link>
                </p>
            ) : (
                <div>
                    <p className="mb-6 text-lg text-green-700">Items in cart: {totalItems}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {cart.map(({ name, price, image, description }: iProduct) => (
                            <div key={name} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-300">
                                <div className="relative w-full h-40 bg-green-100 rounded-md overflow-hidden mb-4">
                                    <Image
                                        src={image}
                                        alt={name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-md"
                                    />
                                </div>
                                <h2 className="font-semibold text-lg mb-2 text-green-800">{name}</h2>
                                <p className="text-green-700 mb-2 font-medium">Price: ${price}</p>
                                <p className="text-green-600 mb-4">{description}</p>
                                <button
                                    className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
                                    onClick={() => removeFromCart({ name, price, image, description })}
                                >
                                    Remove from Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
