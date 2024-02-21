
import React from 'react';

const Footer: React.FC = () => {
    const isDarkMode = true; // Set this based on your app's theme

    return (
        <footer className={`py-4 px-6 fixed bottom-0 w-full ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-sm">
                    &copy; 2022 Salon Name. All rights reserved.
                </div>
                <div className="text-sm">
                    Made with <span className="text-red-500">&hearts;</span> by Your Name
                </div>
            </div>
        </footer>
    );
};

export default Footer;