import React from 'react';
import Footer from '@/components/footer-sticky';
import Hero from '@/components/hero';

const SalonPage: React.FC = () => {
    return (
        <div className="bg-gray-100">
            <header className="bg-white shadow ">
                <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
                    <h1 className="text-xl font-bold">Salon Page</h1>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <Hero />

            <main className="container mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-4">Welcome to our Salon</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor nec
                    consectetur tincidunt, mauris lectus aliquet nunc, id tincidunt nisl mauris et
                    velit. Sed euismod, tortor nec consectetur tincidunt, mauris lectus aliquet nunc,
                    id tincidunt nisl mauris et velit.
                </p>
            </main>

            <Footer />

        </div>
    );
};

export default SalonPage;