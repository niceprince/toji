import { cookies } from "next/headers";

export async function authToken() {
  const cookieData = await cookies();
  const token = cookieData.get("auth_token")?.value;
  return token;
}
