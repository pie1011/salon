import React from "react";
import { playfair_display } from "@/app/fonts";

const Navigation: React.FC = () => {
  const linkClass = "flex items-center text-lg font-extrabold text-black logo";

  return (
    <nav className="container mx-auto px-4 py-2 flex items-center justify-between">
      <a href="/" className={`${linkClass} ${playfair_display.className} `}>
        the
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#127680"
          className="bi bi-scissors"
          viewBox="0 0 16 16"
          style={{ marginRight: "3px", transform: "rotate(15deg)" }}
        >
          <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61 3.5 3.5zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0zm7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
        </svg>
        salon
      </a>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
