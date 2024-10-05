import React from "react";
import { backgroundImages } from "@/constants";
import dynamic from "next/dynamic";
// import ContactClientComponent from "@/app/contact/client";

const ContactClientComponent = dynamic(() => import("@/app/contact/client"), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <div
      className="w-full h-full rounded-3xl bg-cover bg-center custom-shadow z-10 flex flex-col relative"
      style={{ backgroundImage: `url(${backgroundImages.contact})` }}
    >
      <div className="w-full h-full bg-black opacity-[0.97] absolute left-0 right-0"></div>
      <div className="flex flex-row h-full w-full justify-between pr-24 pl-24">
        <ContactClientComponent />
      </div>
    </div>
  );
}
