import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const useCdn = process.env.NODE_ENV === "production";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

export default client;
