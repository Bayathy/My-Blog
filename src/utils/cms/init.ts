import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "bayathy",
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  apiKey: process.env.NEXT_PUBLIC_API_KEY!,
});
