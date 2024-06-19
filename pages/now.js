import { Divider } from "../components/Divider";
import { Container } from "../components/Container";
export default function Sprints() {
  return (
    <Container>
      <h1 className="text-4xl font-bold tracking-tight leading-[50px] text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        What am I focussing on now?
      </h1>
      <Divider text="last updated: 19th June, 2024" />
    </Container>
  );
}
