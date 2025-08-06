import { getUser } from "@/lib/dataAccessLayer";

export async function requireSuperAdmin() {
  const user = await getUser();

  if (!user || user.role !== "ADMIN") {
    return null;
  }

  return user;
}
