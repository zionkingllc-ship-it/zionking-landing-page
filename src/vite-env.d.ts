/// <reference types="vite/client" />

interface Window {
  fbq?: (...args: unknown[]) => void;
}

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
