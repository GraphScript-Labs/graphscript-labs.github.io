import { CodeFile } from "@components/block/code-file";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function About() {
  return (
    <Section>
      <Heading size="large">
        What's GraphScript?
      </Heading>

      <Container className={useClasses("about-content")}>
        <Container className={useClasses("about-visual")}>
          <CodeFile
            fileName="AI-Chatbot-Logic.gsam"

            code={[
              "Wait for input",
              "Send input to AI",
              "Receive output from AI",
              "Send output to user",
              "Go to Start and repeat",
            ]}
          />
        </Container>

        <Container className={useClasses("about-description")}>
          <Text className={useClasses("about-text")}>
            Instead of Syntax that only computer, god and for a small
            period of time a few humans can understand, use flowcharts
            to write your code.
          </Text>
        </Container>
      </Container>
    </Section>
  );
}

