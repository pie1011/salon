import React from "react";
import StylistAccess from "@/components/footer-stylist-access";

const Footer: React.FC = () => {
  const footerHeading =
    "text-l md:text-2xl font-serif tracking-wide uppercase text-teal-800";

  let menu = {
    items: () => {
      return [
        { key: "Home", value: "/" },
        { key: "About", value: "/about" },
        { key: "Services", value: "/services" }
      ];
    },
  };

  return (
    <footer className="sticky-bottom flex flex-col bg-teal-500/25 p-2 xl:p-10 shadow-xl">
      <div className="flex flex-col lg:flex-row justify-between xl:pr-5">
        <div className="flex flex-col md:flex-row justify-between text-sm grow px-20 text-slate-900">
          {/* Address */}
          <div className="mx-5 mt-5 p-0">
            <p className="mb-4 font-bold underline underline-offset-8">THE SALON</p>
            <ul className="list-none">
              <li>555-123-4567</li>
              <li>
                123 Pretend Road
                <br />
                Madeuptown, CA 12345
              </li>
              <li>email@example.com</li>
            </ul>
          </div>
          {/* Navigation */}
          <div className="mx-5 mt-5 p-0">
          <p className="mb-4 font-bold uppercase underline underline-offset-8">Navgation</p>
            <ul className="list-none">
              {menu.items().map((item, index) => (
                <li key={index}>
                  <a className="text-teal-800" aria-current="page" href={item.value}>
                    {item.key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Business Hours */}
          <div className="mx-5 mt-5 p-0">
          <p className="mb-4 font-bold uppercase underline underline-offset-8">Business Hours</p>
            <ul className="list-none">
              <li>Monday: 10 AM - 9 PM</li>
              <li>Tuesday: 10 AM - 9 PM</li>
              <li>Wednesday: 10 AM - 9 PM</li>
              <li>Thursday: 10 AM - 9 PM</li>
              <li>Friday: 10 AM - 9 PM</li>
              <li className="font-bold">Saturday: 10 AM - 6 PM</li>
              <li className="font-bold">Sunday: CLOSED</li>
            </ul>
          </div>
        </div>
        <div className="flex-grow"></div>
        <StylistAccess />
      </div>
    </footer>
  );
};

export default Footer;
