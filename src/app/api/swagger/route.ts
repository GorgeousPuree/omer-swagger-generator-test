import { LicenseDTO, LicencePatchDTO, NewLicenseDTO } from "@/models/license";
import generateOpenApiSpec from "@omer-x/next-openapi-json-generator";

export async function GET() {
  const spec = await generateOpenApiSpec({
    LicenseDTO,
    LicencePatchDTO,
    NewLicenseDTO
  }, {
    clearUnusedSchemas: true
  });

  return Response.json(spec);
}
