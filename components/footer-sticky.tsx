
import React from 'react';

const FooterSticky: React.FC = () => {
    let currentYear = new Date().getFullYear()

    return (
        <footer className="bg-white text-slate-800 py-4 px-6  bottom-0 w-full shadow-xlg">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    &copy; {currentYear} The Salon. All rights reserved.
                </div>
                <div>
                    Made with <span className="text-rose-400">&hearts;</span> by Katie Harshman
                </div>
            </div>
        </footer>
    );
};

export default FooterSticky;