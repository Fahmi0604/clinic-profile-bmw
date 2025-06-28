export async function fetcher<T>(
  url: string,
  options?: RequestInit & { timeout?: number }
): Promise<T> {
  const timeout = options?.timeout || 10000; // 10 seconds default
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const res = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    
    clearTimeout(timeoutId);
    
    if (!res.ok) {
      throw new Error(`Fetch error: ${res.status}`);
    }
    
    return res.json();
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}
