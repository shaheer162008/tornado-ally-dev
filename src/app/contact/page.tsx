import type { Metadata } from "next";
import Hero from "@/components/hero";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { GridBackground } from "@/components/ui/grid-background";

export const metadata: Metadata = {
  title: "Contact - TornadoallyDev",
  description: "Get in touch with TornadoallyDev for Unity development, Blender art, C# programming, shaders, and texturing.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col bg-background relative w-full overflow-x-hidden">
      <Hero 
        title={<>Get <span className="text-primary">in Touch</span></>}
        description="Get a free consultation or send a message to discuss a Unity or Blender project."
        announcementBanner={{ text: "Get a Free Consultation", linkText: "", linkHref: "#" }}
      />
      <GridBackground>
        <Contact />
        <Footer />
      </GridBackground>
    </main>
  );
}
