import {HeaderView} from "~/app/_components/HeaderView";
import {GraphsView} from "~/app/_components/GraphsView";
import {api} from "~/trpc/server";

export default async function Home() {
  const covidCases = await api.positiveCovidCases.getAll()
  const virusCases = await api.positiveVirusCases.getAll()

  return (
    <main className="flex h-screen flex-col">
      <HeaderView />

      <div className="h-screen bg-gray-50">
        <GraphsView covidCases={covidCases} virusCases={virusCases} />
      </div>
    </main>
  );
}
