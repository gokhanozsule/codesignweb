import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codesign",
  description: "Personal website of Gökhan Özsüle",
};

export default function Home() {
  return <Hero />;
}
