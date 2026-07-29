import type { Metadata } from "next";
import { servicesMetadata } from "@/metadata";
import Hero from "@/components/hero";
import Services from "@/components/services";
import { ServicesImportance } from "@/components/services/importance";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";
import { ServicesFaq } from "@/components/services/faq";

export const metadata: Metadata = servicesMetadata;

export default function ServicesPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden border-white/5">
      <Hero 
        title={<>Blender Services Built for <span className="text-primary">Game Work.</span></>} 
        description="Unity development, Blender art, C# programming, shader development, hard-surface modeling, and texturing support in one focused studio page."
        announcementBanner={{ text: "Services", linkText: "", linkHref: "#" }}
      />
      <GridBackground className="border-t border-white/5">
        <Services hideViewAll={true} />
        <ServicesImportance />
        <ServicesFaq />
      </GridBackground>
      <Footer />
    </main>
  );
}
