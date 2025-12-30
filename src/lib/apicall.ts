import api from "./http";

export async function serverGet<T>(
  url: string,
  params?: Record<string, unknown>
): Promise<T> {
  const res = await api.get<T>(url, {
    params,
    // force SSR
    headers: {
      "Cache-Control": "no-store",
    },
  });

  return res.data;
}
