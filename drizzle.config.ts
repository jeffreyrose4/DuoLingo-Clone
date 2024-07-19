// import "dotenv/config";
// import type { Config } from "drizzle-kit";

// export default {
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.DATABASE_URL!,
//   },
// } satisfies Config;


import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle",
  dialect: "postgresql", // Specify the dialect
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Use url instead of connectionString
  },
  migrations: {
    table: "migrations",
    schema: "public", // This is optional and specific to PostgreSQL
  },
});
