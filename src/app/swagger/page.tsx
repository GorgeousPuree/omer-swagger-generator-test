import generateOpenApiSpec from "@omer-x/next-openapi-json-generator";
import ReactSwagger from "@/components/ReactSwagger";
import { LicenseDTO } from "@/models/license";

const Page = async () => {
  const spec = await generateOpenApiSpec({
    LicenseDTO,
  });
  return <ReactSwagger spec={spec} />;
};

export default Page;
