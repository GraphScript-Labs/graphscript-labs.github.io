import { Section } from "@components/kit/section";
import { Heading } from "@components/ui/text/heading";
import { LineBreak } from "@components/ui/text/line-break";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function About() {
  return (
    <Section>
      <Heading size="large">
        What's GraphScript?
      </Heading>

      <Text>
        <Text>
          Software development is about solving problems and building
          solutions, not just writing code. It's more inclined towards
          building logical workflows and processes, rather than just
          writing lines of code.
        </Text>

        <LineBreak />
        <Text>
          GraphScript is a visual scripting ecosystem that focuses on
          the logical and flow aspects of software development rather than
          the typical code-centric approach.
        </Text>

        <LineBreak />
        <Text>
          It provides a visual interface where developers can create
          complex workflows and processes by creating and connecting nodes
          that represent different operations, data transformations, and
          control flow elements.
        </Text>

        <LineBreak />
        <Text>
          This allows developers to focus on the logical structure of their
          applications without getting bogged down in the syntax and details
          of writing code.
        </Text>
      </Text>
    </Section>
  );
}

