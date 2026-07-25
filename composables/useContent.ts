export function useContentUrl(path: string) {
  const config = useRuntimeConfig();
  const base = (config.public.contentBaseUrl as string).replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

// Content is defined as static JSON files, optionally hosted on external
// storage (see NUXT_PUBLIC_CONTENT_BASE_URL). It is fetched from the
// client only, so the site itself stays fully static and never depends on
// our own server at build or request time.
export function useContentJson<T>(path: string) {
  return useFetch<T>(useContentUrl(path), { server: false });
}
