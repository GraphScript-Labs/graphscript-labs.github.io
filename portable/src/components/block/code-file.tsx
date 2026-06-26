import { Xmark, XRegular } from "@attaditya/iconoir-preact";
import { CodeBlock } from "@components/kit/code-block";
import { Container } from "@components/ui/structure/container";
import { Text } from "@components/ui/text/text";
import { useClasses } from "@styles";

interface CodeFileProps {
  fileName?: string;
  code?: string[];
}

export function CodeFile({
  fileName,
  code
}: CodeFileProps) {
  return (
    <Container className={useClasses("code-file")}>
      <Container className={useClasses("code-file-tab")}>
        <Text className={useClasses("code-file-tab-text")}>
          {fileName || "code.gsam"}
        </Text>

        <Xmark className={useClasses("code-file-tab-close")} />
      </Container>

      <Container className={useClasses("code-file-content")}>
        {code?.map((line, index) => (
          <CodeBlock key={index} content={line} />
        ))}
      </Container>
    </Container>
  )
}

