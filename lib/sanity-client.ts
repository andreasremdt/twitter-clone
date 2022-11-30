import createClient from "@sanity/client";

const config = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION,
  token: process.env.SANITY_API_TOKEN,
};

const clients = {
  readonly: createClient({ ...config, useCdn: process.env.NODE_ENV === "production" }),
  writable: createClient({ ...config, useCdn: false }),
};

export default clients;
