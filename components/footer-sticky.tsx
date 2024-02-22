
import React from 'react';

const Footer: React.FC = () => {
    let currentYear = new Date().getFullYear()

    return (
        <footer className="bg-black text-white py-4 px-6  bottom-0 w-full shadow-xlg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    &copy; {currentYear} The Salon. All rights reserved.
                </div>
                <div className="text-sm">
                    Made with <span className="text-red-500">&hearts;</span> by Katie Harshman
                </div>
            </div>
        </footer>
    );
};

export default Footer;