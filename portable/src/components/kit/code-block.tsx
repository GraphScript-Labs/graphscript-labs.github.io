import { ArrowDown } from "@attaditya/iconoir-preact";
import { Container } from "@components/ui/structure/container";
import { useClasses } from "@styles";

interface CodeBlockProps {
  content: string;
}

export function CodeBlock({ content }: CodeBlockProps) {
  return (<>
    <Container className={useClasses("code-block")}>
      {content}
    </Container>

    <Container className={useClasses("code-block-next")}>
      <ArrowDown />
    </Container>
  </>);
}

