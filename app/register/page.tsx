import React from "react";
import Register from "@/components/register";

const RegisterPage: React.FC = () => {
  return (
      <main className="min-h-screen"
        style={{
          backgroundImage:
            "url('/images/img-adam-winger-KVVjmb3IIL8-unsplash.png')",
          backgroundAttachment: "local",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Register />
      </main>
  );
};

export default RegisterPage;
