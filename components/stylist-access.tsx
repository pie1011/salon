import React from "react";
import { playfair_display } from "@/app/fonts";

const StylistAccess: React.FC = () => {
  const footerHeading =
    "text-l md:text-2xl font-serif tracking-wide uppercase text-teal-600";

  let current_user = {
    is_authenticated: true,
    user_type: "stylist",
    username: "JohnDoe",
  };
  let menu = {
    items: () => {
      return [
        { key: "Home", value: "/" },
        { key: "Services", value: "/services" },
        { key: "About", value: "/about" },
        { key: "Contact", value: "/contact" },
      ];
    },
  };

  return (
    <div className="m-4 bg-black">
      <div className="flex flex-col text-white text-center px-2 pb-2 pt-4 m-5">
        <h1 className={` ${footerHeading} ${playfair_display.className}`}>
          Stylist Access
        </h1>

        {current_user.is_authenticated ? (
          current_user.user_type === "stylist" ? (
            <>
              <p>Greetings, {current_user.username}! You are logged in.</p>
              <a href="/account" className="btn btn-primary">
                Stylist Account
              </a>
              <br />
              <a href="/logout" className="btn btn-primary">
                Stylist Logout
              </a>
            </>
          ) : (
            <>
              <p>Please register or log in to view your stylist account.</p>
              <a href="/stylist_register" className="btn btn-primary">
                Stylist Registration
              </a>
              <br />
              <a href="/stylist_login" className="btn btn-primary">
                Stylist Login
              </a>
            </>
          )
        ) : (
          <>
            <p>Please register or log in to view your stylist account.</p>
            <a href="/stylist_register" className="btn btn-primary">
              Stylist Registration
            </a>
            <br />
            <a href="/stylist_login" className="btn btn-primary">
              Stylist Login
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default StylistAccess;