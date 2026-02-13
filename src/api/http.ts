/**
 * This is a utility module for making HTTP requests. It provides:
 *  - Environment configuration for API mode (`mock` or `real`) and base URL
 *  - a `fetchJson` function that wraps the native `fetch` API with:
 *      - Automatic JSON content-type headers
 *      - URL construction (handles both relative and absolute paths)
 *      - Error handling with detailed error messages
 *      - Automatic JSON parsing of responses
 */
export const API_MODE = (process.env.NEXT_PUBLIC_API_MODE ?? (import.meta as { env?: { VITE_API_MODE?: string } }).env?.VITE_API_MODE ?? "mock") as "mock" | "real";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? (import.meta as { env?: { VITE_API_BASE_URL?: string } }).env?.VITE_API_BASE_URL ?? "";


/**
 * 
 * @param path 
 * @param init 
 * @returns 
 */
export async function fetchJson<T>(path: string, init?: RequestInit): Promise<T> {
    const url = path.startsWith("http") ? path : `${API_BASE_URL}${path}`;

    const res = await fetch(url, {
        headers: {"Content-Type": "application/json", ...(init?.headers ?? {}) },
        ...init,
    });

    if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Request failed (${res.status}): ${text || res.statusText}`);
    }

    return (await res.json()) as T;
}