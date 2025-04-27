import { TechStackSection } from "@/components/TechStackSection";
import { HeroSection } from "@/components/HeroSection";import AboutSection from "@/components/AboutSection";
import ServiceSection from "@/components/ServiceSection";
import AskMe from "@/components/AskMe";
import ContectMe from "@/components/ConnectMe"
;
import SignUp from "@/components/SignUp";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ServiceSection />
      <AskMe />
      {/* <ContectMe /> */}
      <SignUp />
    </div>
  );
}
