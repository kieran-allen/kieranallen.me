import { Explanation } from "~/components/Explanation";
import { Section } from "~/components/Section";
import { Button } from "~/components/ui/button";
import { Timeline } from "~/components/ui/timeline";
import { education, experiences, interests } from "~/consts";
import { cn } from "~/lib/utils";

export default function Home() {
  return (
    <div
      class={cn(
        "max-w-4xl",
        "mx-auto",
        "py-8",
        "px-4",
        "flex",
        "flex-col",
        "gap-8"
      )}
    >
      <header class={cn("flex", "flex-col", "gap-2", "mb-8")}>
        <h1 class={cn("text-5xl", "font-bold")}>Kieran Allen</h1>
        <h2 class={cn("text-3xl", "text-gray-600")}>
          Senior Frontend Developer
        </h2>
        <h3 class={cn("text-xl", "text-gray-500")}>London, United Kingdom</h3>
      </header>

      <section class={cn("flex", "gap-2", "mb-8")}>
        <Button
          variant="outline"
          as="a"
          href="https://github.com/kieran-allen"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          variant="outline"
          as="a"
          href="https://www.linkedin.com/in/kieran-allen-96655559"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </section>

      <Section title="Professional Summary">
        <p class={cn("text-sm", "leading-relaxed")}>
          Innovative and results-driven Frontend Developer with extensive
          experience in building high-performance, user-centric web
          applications. Proven track record in leveraging cutting-edge
          technologies to deliver exceptional user experiences and drive
          business growth. Skilled in ReactJS, Redux, React Query, SolidJS, Tailwind CSS,
          and Next.js, with a strong foundation in JavaScript and TypeScript.
          Passionate about cryptocurrency and its potential to revolutionize
          finance.
        </p>
      </Section>

      <Section title="Experience">
        <Timeline
          items={experiences.map((exp) => ({
            title: exp.title,
            description: <Explanation fromTo={exp.fromTo} list={exp.list} />,
          }))}
          activeItem={Infinity}
        />
      </Section>

      <Section title="Education">
        <Timeline
          items={education.map((edu) => ({
            title: edu.title,
            description: (
              <Explanation fromTo={edu.fromTo} description={edu.description} />
            ),
          }))}
          activeItem={Infinity}
        />
      </Section>

      <Section title="Interests">
        <ul class={cn("flex", "flex-wrap", "gap-2")}>
          {interests.map((interest) => (
            <li
              class={cn(
                "bg-gray-200",
                "px-3",
                "py-1",
                "text-black",
                "rounded-full",
                "text-sm"
              )}
            >
              {interest}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
