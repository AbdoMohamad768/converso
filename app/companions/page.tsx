import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function Page() {
  const { userId: author } = await auth();

  if (!author) redirect("/sign-in");

  return <div>Companions Library</div>;
}

export default Page;
