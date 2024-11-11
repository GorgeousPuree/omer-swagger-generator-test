import { integer, text, pgTable } from "drizzle-orm/pg-core";

export const licenses = pgTable("licenses", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  licenseNumber: text("license_number").notNull(),
  country: text("country").notNull()
});
