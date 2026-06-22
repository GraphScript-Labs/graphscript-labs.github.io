import { Container } from "@components/ui/structure/container";
import { LimitWidth } from "@components/ui/structure/limit-width";
import { Heading } from "@components/ui/text/heading";
import { useClasses } from "@styles";

interface FooterProps {}

export function Footer({}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={useClasses("footer")}>
      <LimitWidth>
        <Container className={useClasses("footer-content")}>
          <Heading size="max">
            GraphScript
          </Heading>

          <Heading size="small">
            © {year} GraphScript Labs
          </Heading>
        </Container>
      </LimitWidth>
    </footer>
  );
};

