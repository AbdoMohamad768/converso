import CompanionGrid from "@/components/CompanionGrid";
import SearchInput from "@/components/SearchInput";
import SubjectFilter from "@/components/SubjectFilter";
import { getAllCompanion } from "@/lib/actions/companion.action";

async function Page({ searchParams }: SearchParams) {
  const params = await searchParams;
  const subject = params.subject || "";
  const topic = params.topic || "";

  const companions = await getAllCompanion({
    // limit: 10,
    // page: 1,
    subject,
    topic,
  });

  // const { userId: author } = await auth();

  // if (!author) redirect("/sign-in");

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companions Library</h1>
        <div className="flex gap-4 items-center">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      <section className="companions-grid">
        <CompanionGrid companions={companions} />
      </section>
    </main>
  );
}

export default Page;
