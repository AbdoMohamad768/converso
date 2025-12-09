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
