import {HeaderView} from "~/app/_components/HeaderView";
import {GraphsView} from "~/app/_components/GraphsView";

export default async function Home() {
  return (
    <main className="flex h-screen flex-col">
      <HeaderView />

      <div className="h-screen bg-gray-50">
        <GraphsView />
      </div>
    </main>
  );
}
