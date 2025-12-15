import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import {
  getAllCompanion,
  getRecentSessions,
} from "@/lib/actions/companion.action";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanion({ limit: 3 });
  const recentSessionCompanions = await getRecentSessions(10);

  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>

      <section className="home-section">
        {companions.map(({ id, name, topic, duration, subject }: Companion) => (
          <CompanionCard
            key={id}
            id={id}
            name={name}
            topic={topic}
            duration={duration}
            color={getSubjectColor(subject)}
            subject={subject}
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
};

export default Page;
