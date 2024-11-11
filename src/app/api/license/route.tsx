import getLicenses from "@/operations/getLicenses";
import { LicenseDTO } from "@/models/license";
import defineRoute from "@omer-x/next-openapi-route-handler";
import z from "zod";

export const { GET } = defineRoute({
    operationId: "getLicenses",
    method: "GET",
    summary: "Get all users",
    description: "Retrieve a list of licenses",
    tags: ["Licenses"],
    queryParams: z.object({
      select: LicenseDTO.keyof().array().default([])
        .describe("List of the column names"),
    }),
    action: async ({ queryParams }) => {
      return Response.json(await getLicenses());
    },
    responses: {
      200: { description: "Returns a list of licenses", content: LicenseDTO, isArray: true },
    },
  });