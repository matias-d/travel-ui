import Features from "@/components/sections/features";
import GetApp from "@/components/sections/get-app";
import Guide from "@/components/sections/guide";
import Camp from "@/components/sections/camp";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
