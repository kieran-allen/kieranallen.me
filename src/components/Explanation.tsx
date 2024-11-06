import { For, Match, Switch } from "solid-js";
import { Company } from "~/consts";
import { cn } from "~/lib/utils";

type ExplanationProps = {
  fromTo: string;
  list?: string[];
  description?: string;
  company: Company;
};

export function Explanation({ fromTo, list, description, company }: ExplanationProps) {
  return (
    <section class={cn("flex", "gap-4", "flex-col")}>
      <h3>{company.name}</h3>
      <div>{fromTo}</div>
      <Switch fallback={null}>
        <Match when={list?.length}>
          <ul class={cn("flex", "flex-col", "gap-2", "list-disc", "ml-3")}>
            <For each={list}>{(item) => <li>{item}</li>}</For>
          </ul>
        </Match>
        <Match when={description}>
          <p>{description}</p>
        </Match>
      </Switch>
    </section>
  );
}
