/**
 * This is a utility module for making HTTP requests. It provides:
 *  - Environment configuration for API mode (`mock` or `real`) and base URL
 *  - a `fetchJson` function that wraps the native `fetch` API with:
 *      - Automatic JSON content-type headers
 *      - URL construction (handles both relative and absolute paths)
 *      - Error handling with detailed error messages
 *      - Automatic JSON parsing of responses
 */
export const API_MODE = (import.meta.env.VITE_API_MODE ?? "mock") as "mock" | "real";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000";


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