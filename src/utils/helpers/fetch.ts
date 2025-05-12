// type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// interface FetcherOptions {
//   method?: Method;
//   body?: any;
//   headers?: Record<string, string>;
// }

// export const fetcher = async <T>(endpoint: string, options: FetcherOptions = {}): Promise<T> => {
//   const { method = 'GET', body, headers = {} } = options;
//   const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//       ...headers,
//     },
//     body: body ? JSON.stringify(body) : undefined,
//   });
//   if (!res.ok) {
//     const errorBody = await res.json().catch(() => ({}));
//     throw new Error(errorBody.message || 'API error');
//   }
//   return res.json();
// };
