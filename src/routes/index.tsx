import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/about";
import { ContactPreview } from "@/components/sections/contact-preview";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { Insurance } from "@/components/sections/insurance";
import { Intro } from "@/components/sections/intro";
import { Process } from "@/components/sections/process";
import { VisitCta } from "@/components/sections/visit-cta";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => pageHead({ path: "/" }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Process />
      <About />
      <Gallery />
      <Insurance />
      <VisitCta />
      <ContactPreview />
    </>
  );
}
