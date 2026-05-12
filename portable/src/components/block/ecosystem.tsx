import { Section } from "@components/kit/section";
import { Textlet } from "@components/kit/textlet";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function Ecosystem() {
  return (
    <Section>
      <Heading size="large">
        What's included?
      </Heading>

      <Text>
        GraphScript is split into three primary components that work
        together to provide a seamless ecosystem for visual scripting.
        Although the modules are designed to work together, they can
        also be used independently if set up correctly.
      </Text>

      <Container className={useClasses("ecosystem-textlets")}>
        <Textlet
          icon="AtomRegular"
          title="Engine"
        />

        <Textlet
          icon="CurveArrayRegular"
          title="Editor"
        />

        <Textlet
          icon="CubeRegular"
          title="Material"
        />
      </Container>
    </Section>
  );
}

