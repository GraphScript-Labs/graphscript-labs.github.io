import { Linklet } from "@components/kit/linklet";
import { Section } from "@components/kit/section";
import { Container } from "@components/ui/structure/container";
import { Heading } from "@components/ui/text/heading";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

export function Socials() {
  return (
    <Section>
      <Heading size="large">
        Want to stay updated?
      </Heading>

      <Text>
        Stay in the loop with our latest updates, sneak peeks, and
        announcements by following us on our social media channels.
      </Text>

      <Container className={useClasses("socials-linklets")}>
        <Linklet
          icon="GithubRegular"
          title="GitHub"
          url="https://github.com/graphscript-labs"
        />

        <Linklet
          icon="DiscordRegular"
          title="Discord"
          url="https://discord.gg/XqnV5GrnYq"
        />

        <Linklet
          icon="LinkedinRegular"
          title="LinkedIn"
          url="https://linkedin.com/company/graphscript"
        />
      </Container>
    </Section>
  );
}

