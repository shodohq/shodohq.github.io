import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import {
  HomeCTA,
  HomeHero,
  HomeInsight,
  HomeModules,
  HomeProblem,
  HomeWhy,
} from "@/components/home";
import {
  PDSAudience,
  PDSOutputs,
  PDSPoC,
  PDSTwin,
  PDSWhyGraph,
  PDSWorkflow,
} from "@/components/pds";
import { UCAll, UCHero, UCIndex } from "@/components/uc";

export default function Home() {
  return (
    <>
      <Nav active="home" />
      <HomeHero />
      <HomeProblem />
      <HomeInsight />
      <PDSWhyGraph />
      <PDSTwin />
      <HomeModules />
      <PDSWorkflow />
      <PDSOutputs />
      <UCHero />
      <UCIndex />
      <UCAll />
      <PDSAudience />
      <HomeWhy />
      <PDSPoC />
      <HomeCTA />
      <Footer />
    </>
  );
}
