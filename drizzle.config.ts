import dotenv from "dotenv";
import type { Config } from "drizzle-kit";

dotenv.config({ path: [".env.local", ".env"] });

export default {
  dialect: "postgresql",
  schema: "./src/database/schema/index.ts",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT || "5432"),
    user: process.env.DATABASE_USER || "postgres",
    password: process.env.DATABASE_PASS || "12345",
    database: process.env.DATABASE_NAME || "aaa-local",
    ssl: false
  },
  casing: "snake_case",
} satisfies Config;
