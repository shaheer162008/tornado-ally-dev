import type { Metadata } from "next";
import { aboutMetadata } from "@/metadata";
import Hero from "@/components/hero";
import AboutUs from "@/components/about-us";
import { AboutStory } from "@/components/about/story";
import { AboutTeam } from "@/components/about/team";
import { AboutFaq } from "@/components/about/faq";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";

export const metadata: Metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>Unity Developer + Blender Artist. <span className="text-primary">Open for Work.</span></>} 
        description="5 years of experience across Unity, Blender, C# programming, shader development, hard-surface modeling, and texturing."
        announcementBanner={{ text: "About TornadoallyDev", linkText: "", linkHref: "#" }}
      />
      <GridBackground className="-mt-12 sm:-mt-16">
        <AboutStory />
        <AboutUs />
        <AboutTeam />
        <AboutFaq />
        <Footer />
      </GridBackground>
    </main>
  );
}
