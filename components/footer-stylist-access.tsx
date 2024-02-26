import React from "react";
import { playfair_display } from "@/app/fonts";

const StylistAccess: React.FC = () => {
  const footerHeading =
    "text-xl md:text-3xl font-serif tracking-wide uppercase text-teal-600";

  const button = "rounded cursor-pointer hover:bg-teal-600 bg-teal-500/25 p-2 mt-2 uppercase tracking-wide text-extrabold";

  let current_user = {
    is_authenticated: true,
    user_type: "stylist",
    username: "JohnDoe",
  };

  return (
    <div className="rounded m-4 bg-white shadow-lg">
      <div className="flex flex-col text-center px-2 pb-2 pt-4 m-5">
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
          <button className={button}>
            Stylist Registration
          </button>
          <br />
          <button className={button}>
            Stylist Login
          </button>
        </>
        )}
      </div>
    </div>
  );
};

export default StylistAccess;
