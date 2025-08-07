import { Trees } from "lucide-react";
import { Section } from "@components/Section";

export function Ecosystem() {
  const contents = [
    [
      "The GraphScript ecosystem includes a variety of tools and libraries that",
      "enhance the development experience. These tools are designed to work",
      "seamlessly with each other, providing a cohesive environment for building",
      "applications.",
    ].join(" "),
    [
      "The tools include a visual editor for creating scripts, a console for",
      "testing each project, a launcher for managing projects, and a runtime",
      "environment that includes the GraphScript compiler and capable of",
      "updating the entire ecosystem.",
    ].join(" "),
  ];

  return (<>
    <Section
      icon={<Trees />}
      name="The Ecosystem"
    >
      {contents.map(text => <p key={text}>{text}</p>)}
    </Section>
  </>);
}

