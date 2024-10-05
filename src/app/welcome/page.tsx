import React from "react";
import WelcomeClientComponent from "@/app/welcome/client";

export default function WelcomePage() {
  return (
    <div className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative">
      <div className="w-full h-full opacity-85 absolute left-0 right-0 pointer-events-none" />
      <WelcomeClientComponent />;
    </div>
  );
}
