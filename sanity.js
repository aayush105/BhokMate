// import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: "cmr972m0",
//   dataset: "production",
//   apiVersion: "2024-01-01",
//   useCdn: false,
// });

import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "cmr972m0",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
export default client;
