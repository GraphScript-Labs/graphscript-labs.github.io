import { Section } from "@components/kit/section";
import { Heading } from "@components/ui/text/heading";
import { LineBreak } from "@components/ui/text/line-break";
import { Text } from "@components/ui/text/text";

export function Timeline() {
  return (
    <Section>
      <Heading size="large">
        How far along are we?
      </Heading>

      <Text>
        <Text>
          The MVP is created for Mac and is accessible to anyone who is
          interested to try. There is a web MVP (Editor only) as well
          along with Python based Compiler available to any device that
          supports Python.
        </Text>
        
        <LineBreak /><LineBreak /><LineBreak />
        
        <Text>
          The V1 is in progress with a schedule to release the V1 at
          June. It will include a more stable engine and a new interface
          that will be easier to use.
        </Text>
        
        <LineBreak /><LineBreak /><LineBreak />

        <Text>
          V1 (Milestone 1) Internal Focus List:<LineBreak />
          - GSAM Engine V1<LineBreak />
          - GraphScript Editor V1<LineBreak />
          - Fresh and Better Landing Page
        </Text>
        
        <LineBreak /><LineBreak /><LineBreak />

        <Text>
          Plans for future post V1:<LineBreak />
          - Milestone 2: Python Material (Support to use Python scripts
            with GSAM Language)<LineBreak />
          - Milestone 3: GraphScript Auto Pilot (Vibe Code GraphScript
            with GS Auto Pilot)<LineBreak />
          - Milestone 4: NodeJS Material (Support to use NodeJS scripts
            with GSAM Language)<LineBreak />
          - Milestone 5: GS Remote (Execute GraphScript projects from
            a cloud machine)<LineBreak />
          - Milestone 6: GS Zones (Easy Deploy GraphScript projects -
            suited for beginners)
        </Text>
        
        <LineBreak /><LineBreak /><LineBreak />

        <Text>
          (Plans are subjected to possible additions and priority swaps
          based on new ideas, implementation methods, technology and hype)
        </Text>
      </Text>
    </Section>
  );
}

