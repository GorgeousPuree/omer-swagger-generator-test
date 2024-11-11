import { createInsertSchema } from "drizzle-zod";
import { licenses } from "@/database/schema";

const baseSchema = createInsertSchema(licenses, {
  id: schema => schema.id.readonly().describe("Unique identifier of the license"),
  licenseNumber: schema => schema.licenseNumber.describe("Number of the license"),
  country: schema => schema.country.describe("Country where license was issued"),
});

export const LicenseDTO = baseSchema.required()
  .describe("Represents a license definition");

export const NewLicenseDTO = baseSchema.omit({
    id: true,
  }).describe("Data Transfer Object for creating a new license");
  
export const LicencePatchDTO = NewLicenseDTO.partial().omit({
}).describe("Data Transfer Object for updating an existing license");