"use client";
import Achievements from "@/src/app/Components/Achievements"
import Services from "@/src/app/Components/Services";
import Header from "@/src/app/Components/Header";
import Section1 from "@/src/app/Components/Section1";
import Courses from "@/src/app/Components/Courses";
import AboutUs from "@/src/app/Components/AboutUs";
import Testimonials from "@/src/app/Components/Testimonials";
import Footer from "@/src/app/Components/Footer";
import MobileHeader from "@/src/app/mobile/MobileHeader";
import MobileHome from "@/src/app/Components/MobileHome";
import MobileServices from "@/src/app/Components/MobileServices";
import MobileAchievements from "@/src/app/Components/MobileAchievements";
import MobileCourses from "@/src/app/Components/MobileCourses";
import MobileAboutUs from "@/src/app/Components/MobileAboutUs";
import MobileTestimonials from "@/src/app/Components/MobileTestimonials";
import MobileFooter from "@/src/app/Components/MobileFooter";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      {isMobile ? <MobileHome /> : <Section1 />}
      {isMobile ? <MobileServices /> : <Services />}
      {isMobile ? <MobileAchievements /> : <Achievements />}
      {isMobile ? <MobileCourses /> : <Courses />}
      {isMobile ? <MobileAboutUs /> : <AboutUs />}
      {isMobile ? <MobileTestimonials /> : <Testimonials />}
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
}
