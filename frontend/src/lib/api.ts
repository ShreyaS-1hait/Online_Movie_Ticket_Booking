export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001';

type FetchJsonInit = RequestInit & { skipCache?: boolean };

export async function fetchJson<T>(path: string, init: FetchJsonInit = {}): Promise<T> {
  const { skipCache, ...rest } = init;
  const res = await fetch(`${API_BASE_URL}${path}`, {
    cache: skipCache ? 'no-store' : 'force-cache',
    ...rest
  });

  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }

  return res.json() as Promise<T>;
}
