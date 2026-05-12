import { About } from "@components/block/about";
import { Audience } from "@components/block/audience";
import { Ecosystem } from "@components/block/ecosystem";
import { Hero } from "@components/block/hero";
import { Jumps } from "@components/block/jumps";
import { Socials } from "@components/block/socials";
import { Sponsor } from "@components/block/sponsor";
import { Timeline } from "@components/block/timeline";
import { ScrollPop } from "@components/kit/scrollpop";

export function HomeView() {
  return (
    <ScrollPop>
      <Hero />
      <Jumps />
      <Sponsor />
      <About />
      <Audience />
      <Timeline />
      <Ecosystem />
      <Socials />
    </ScrollPop>
  );
}

