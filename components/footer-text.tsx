
import React from 'react';
import { playfair_display } from '@/app/fonts';

const Footer: React.FC = () => {
    const footerHeading = "text-l md:text-2xl font-serif tracking-wide uppercase text-teal-600";

    let current_user = {
        is_authenticated: true,
        user_type: "stylist",
        username: "JohnDoe"
    }
    let menu = {
        items: () => {
            return [
                { key: "Home", value: "/" },
                { key: "Services", value: "/services" },
                { key: "About", value: "/about" },
                { key: "Contact", value: "/contact" }
            ]
        }
    }

    return (
        <footer className="sticky-bottom flex flex-col bg-teal-200/25 shadow-inner text-slate">
            <div className="flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col md:flex-row justify-between text-sm grow px-20">
                    {/* Address */}
                    <div className="mx-5 mt-5 p-0">
                        <strong>THE SALON</strong>
                        <hr className="my-2" />
                        <ul className="list-none">
                            <li>555-123-4567</li>
                            <li>123 Pretend Road<br />Madeuptown, CA 12345</li>
                            <li>email@example.com</li>
                        </ul>
                    </div>
                    {/* Navigation */}
                    <div className="mx-5 mt-5 p-0">
                        <strong>SITE LINKS</strong>
                        <hr className="my-2" />
                        <ul className="list-none">
                            {menu.items().map((item, index) => (
                                <li key={index}>
                                    <a aria-current="page" href={item.value}>{item.key}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Business Hours */}
                    <div className="mx-5 mt-5 p-0">
                        <strong>BUSINESS HOURS</strong>
                        <hr className="my-2" />
                        <ul className="list-none">
                            <li>Monday: 10 AM - 9 PM</li>
                            <li>Tuesday: 10 AM - 9 PM</li>
                            <li>Wednesday: 10 AM - 9 PM</li>
                            <li>Thursday: 10 AM - 9 PM</li>
                            <li>Friday: 10 AM - 9 PM</li>
                            <li><em>Saturday: 10 AM - 6 PM</em></li>
                            <li><em>Sunday: CLOSED</em></li>
                        </ul>
                    </div>
                </div>

                {/* Stylist Access */}
                <div className="m-4 bg-black">
                    <div className="flex flex-col text-white text-center px-2 pb-2 pt-4 m-5">
                    <h1 className={` ${footerHeading} ${playfair_display.className}`}>Stylist Access</h1>

                        {current_user.is_authenticated ? (
                            current_user.user_type === "stylist" ? (
                                <>
                                    <p>Greetings, {current_user.username}! You are logged in.</p>
                                    <a href="/account" className="btn btn-primary">Stylist Account</a>
                                    <br />
                                    <a href="/logout" className="btn btn-primary">Stylist Logout</a>
                                </>
                            ) : (
                                <>
                                    <p>Please register or log in to view your stylist account.</p>
                                    <a href="/stylist_register" className="btn btn-primary">Stylist Registration</a>
                                    <br />
                                    <a href="/stylist_login" className="btn btn-primary">Stylist Login</a>
                                </>
                            )
                        ) : (
                            <>
                                <p>Please register or log in to view your stylist account.</p>
                                <a href="/stylist_register" className="btn btn-primary">Stylist Registration</a>
                                <br />
                                <a href="/stylist_login" className="btn btn-primary">Stylist Login</a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;