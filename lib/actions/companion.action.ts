"use server";

import { auth } from "@clerk/nextjs/server";
import { craeteSupabaseClient } from "../supabase";

export async function createCompanion(formData: CreateCompanion) {
  const { userId: author } = await auth();
  const supabase = craeteSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data) {
    throw new Error(error.message || "Failed to create companion");
  }

  return data[0];
}

export async function getAllCompanion({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) {
  // const { userId: author } = await auth();
  const supabase = craeteSupabaseClient();

  let query = supabase.from("companions").select();

  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }

  query = query.range((page - 1) * limit, page * limit - 1);

  const { data: companions, error } = await query;

  if (error || !companions) {
    throw new Error(error.message || "Failed to create companion");
  }

  return companions;
}
