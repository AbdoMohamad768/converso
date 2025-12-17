import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanion,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

export const dynamic = "force-dynamic";

async function Page() {
  const companions = await getAllCompanion({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        {companions.map((companion) => (
          <CompanionCard
            color={getSubjectColor(companion.subject)}
            key={companion.id}
            {...companion}
          />
        ))}
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently Completed Lessons"
          companions={recentSessionCompanions}
          classNames="w-2/3 max-lg:w-full"
        />

        <CTA />
      </section>
    </main>
  );
}

export default Page;
