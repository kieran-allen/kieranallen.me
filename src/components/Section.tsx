import { cn } from "~/lib/utils";

type SectionProps = {
  title: string;
  children: any;
};

export function Section({ title, children }: SectionProps) {
  return (
    <section class={cn("flex", "flex-col", "gap-4")}>
      <header>
        <h2 class={cn("text-3xl")}>{title}</h2>
      </header>
      {children}
    </section>
  );
}
