import { Infolet } from "@components/kit/infolet";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function Audience() {
  return (
    <Section>
      <Heading size="large">
        Who's it for?
      </Heading>

      <Text>
        Here's a list of conditions you need to meet to use GraphScript:
      </Text>

      <Container className={useClasses("audience-infolets")}>
        <Infolet
          icon={"BrainRegular"}
          title="Reasoning"
          description="You should be able to think and reason"
        />

        <Infolet
          icon={"LaptopRegular"}
          title="Device"
          description="You should have a device to run GraphScript on"
        />
      </Container>
    </Section>
  );
}

