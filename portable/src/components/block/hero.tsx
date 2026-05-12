import { Container } from "@components/ui/structure/container";
import { Image } from "@components/ui/structure/image";
import { NodeBG } from "@components/ui/structure/node-bg";
import { Heading } from "@components/ui/text/heading";
import { useAsset } from "src/assets/assets";
import { useClasses } from "@styles";

export function Hero() {
  return (
    <Container className={useClasses("hero")}>
      <Container className={useClasses("hero-background")}>
        <NodeBG rows={0} cols={0} />
      </Container>

      <Container className={useClasses("hero-content")}>
        <Container className={useClasses("hero-brand")}>
          <Image
            alt="GraphScript Logo"
            src={useAsset("logo.png")}
            className={useClasses("hero-image")}
          />

          <Heading size="max">
            GraphScript
          </Heading>

          <Container className={useClasses("hero-subtitle")}>
            <Heading size="medium">
              Create Logic, Not Syntax
            </Heading>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

