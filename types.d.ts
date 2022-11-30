declare namespace NodeJS {
  interface ProcessEnv {
    SANITY_PROJECT_ID: string;
    SANITY_DATASET: string;
    SANITY_API_VERSION: string;
    SANITY_API_TOKEN: string;

    NEXT_PUBLIC_BASE_URL: string;

    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
  }
}
