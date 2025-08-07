import { Section } from "@components/Section";
import { RectangleGoggles } from "lucide-react";

export function Future() {
  const contents = [
    [
      "The future of programming is not just about writing code,",
      "it's much more about logic, creativity, and problem-solving,",
      "and not about the syntax.",
    ].join(" "),
    [
      "GraphScript is a new ecosystem that will (in the future) allow you to",
      "develop applications without writing code, in a visual and intuitive way.",
    ].join(" "),
    [
      "It will be very easy to use, in desktops, web and most importantly,",
      "in virtual and augmented reality (in the future).",
    ].join(" "),
  ];

  return (<>
    <Section
      icon={<RectangleGoggles />}
      name="Programming Like The Future"
    >
      {contents.map(text => <p key={text}>{text}</p>)}
    </Section>
  </>);
}

