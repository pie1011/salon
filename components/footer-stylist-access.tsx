import React from "react";
import { playfair_display } from "@/app/fonts";

const StylistAccess: React.FC = () => {
  const footerHeading =
    "text-l md:text-2xl font-serif tracking-wide uppercase text-teal-600";

  const button = "rounded-none hover:bg-teal-600 cursor-pointer bg-teal-700 p-2 mt-2 uppercase text-extrabold";

  let current_user = {
    is_authenticated: true,
    user_type: "stylist",
    username: "JohnDoe",
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
              <button className={button}>
                Stylist Account
              </button>
              <button className={button}>
                Stylist Logout
              </button>
            </>
          ) : (
            <>
              <p>Please register or log in to view your stylist account.</p>
              <button className={button}>
                Stylist Registration
              </button>
              <br />
              <button className={button}>
                Stylist Login
              </button>
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
