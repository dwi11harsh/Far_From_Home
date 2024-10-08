
import Product from "../product/page";

export default function Buyer() {
    return (
        <div className="mt-0">
            <Product />
            <footer className="bg-green-900 text-white py-8 mt-12">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* About Us */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">About Us</h3>
                        <p>We are committed to providing the best agricultural products to our customers. Our mission is to support sustainable farming.</p>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="font-bold text-lg mb-2">Contact Us</h3>
                        <p>Email: contact@agrimarket.com</p>
                        <p>Phone: +1 800 123 456</p>
                        <p>Address: 123 Farm Road, Countryside</p>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:underline">Facebook</a>
                            <a href="#" className="hover:underline">Twitter</a>
                            <a href="#" className="hover:underline">Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8">
                    <p>&copy; 2024 AgriMarket. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
