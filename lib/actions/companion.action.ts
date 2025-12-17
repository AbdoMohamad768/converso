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

export async function getCompanion(id: string) {
  const supabase = craeteSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id);

  if (error || !data) {
    throw new Error(error.message || "Failed to get the companion");
  }

  return data![0];
}

export async function addToSessionHistory(companionId: string) {
  const supabase = craeteSupabaseClient();
  const { userId } = await auth();

  const { data, error } = await supabase
    .from("session_history")
    .insert({ user_id: userId, companion_id: companionId });

  if (error) {
    throw new Error(error.message || "Failed to Add Session");
  }

  return data;
}

export async function getRecentSessions(limit = 10) {
  const supabase = craeteSupabaseClient();

  const { data, error } = await supabase
    .from("session_history")
    .select("id, companions:companion_id(*)")
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message || "Failed to get sessions");
  }

  return data.map(({ id, companions }) => ({ sessionId: id, ...companions }));
}

export async function getUserSessions(userId: string, limit = 10) {
  const supabase = craeteSupabaseClient();

  const { data, error } = await supabase
    .from("session_history")
    .select("companions:companion_id(*)")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    throw new Error(error.message || "Failed to get sessions");
  }

  return data.map(({ companions }) => companions);
}

export async function getUserCompanions(userId: string) {
  const supabase = craeteSupabaseClient();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("author", userId)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message || "Failed to get companions");
  }

  return data;
}

export async function newCompanionPermission() {
  const { userId, has } = await auth();
  const supabase = craeteSupabaseClient();

  let limit = 0;

  if (has({ plan: "pro" })) return true;
  else if (has({ feature: "3_active_companions" })) limit = 3;
  else if (has({ feature: "10_active_companions" })) limit = 10;

  const { data, error } = await supabase
    .from("companions")
    .select("id", { count: "exact" })
    .eq("author", userId);

  if (error) {
    throw new Error(error.message || "Failed to get companions");
  }

  const companionCount = data.length;

  if (companionCount >= limit) return false;
  else return true;
}
