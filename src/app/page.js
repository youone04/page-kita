import AboutComp from "@/components/AboutComp";
import HomeCompAbove from "@/components/HomeCompAbove";
import { NavbarComp } from "@/components/NavbarComp";
import Responsive from "@/components/Responsive";
import SolutionComp from "@/components/SolutionComp";

export default function Home() {
  return (
    <div className="bg-white">
    <NavbarComp/>
    <HomeCompAbove/>
    <AboutComp/>
    <SolutionComp/>
    {/* <Responsive/> */}
    </div>
  )
}
