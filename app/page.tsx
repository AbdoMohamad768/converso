import CompanionGrid from "@/components/CompanionGrid";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanion,
  getRecentSessions,
} from "@/lib/actions/companion.action";

const Page = async () => {
  const companions = await getAllCompanion({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        <CompanionGrid companions={companions} />
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
};

export default Page;
