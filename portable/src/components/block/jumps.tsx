import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function Jumps() {
  return (
    <Section>
      <Heading size="large">
        Hotspots
      </Heading>

      <Text>
        Quick jumps to recommended and common pages by or related to GraphScript.
      </Text>

      <Container className={useClasses("jump-linklets")}>
        <Linklet
          icon="CurveArrayRegular"
          title="Online Editor"
          url="https://graphscript-labs.github.io/editor"
        />

        <Linklet
          icon="CloudDownloadRegular"
          title="Latest Releases"
          url="https://github.com/GraphScript-Labs/installer/releases"
        />

        <Linklet
          icon="BookRegular"
          title="Documentation"
          url="https://graphscript-labs.github.io/docs"
        />

        <Linklet
          icon="TerminalTagRegular"
          title="Source Code"
          url="https://github.com/GraphScript-Labs"
        />
      </Container>
    </Section>
  );
}

