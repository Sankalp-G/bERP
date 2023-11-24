import { createClient } from "@libsql/client";

const client = createClient({
  url: process.env.TURSO_URL!,
  authToken: process.env.TURSO_TOKEN
});

export default client;
